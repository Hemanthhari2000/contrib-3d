import * as cheerio from 'cheerio';
import got from 'got';
import { kGithubColorCode } from './constants';

const fetchData = async (username, year) => {
	const url = `https://github.com/${username}?tab=overview&from=${year}-12-01&to=${year}-12-31`;
	let data;
	try {
		data = await got.get(url);
		return data.body;
	} catch (error) {
		return null;
	}
};

export const fetchContribData = async (username, year) => {
	let contributions = [];
	let contribData = [];
	let minCount = 0;
	let maxCount = 0;
	let data = await fetchData(username, year);
	if (!data) {
		return null;
	}
	const $ = cheerio.load(data);
	let weeks = $('.js-yearly-contributions svg > g g');

	weeks.each((i, w) => {
		let week = {};
		week['week'] = i;
		week['days'] = [];
		$(w)
			.find('rect')
			.each((j, r) => {
				var wsCount = $(r).data('count');
				if (!wsCount) {
					var countString = $(r).text().split(' ')[0];
					var count;
					if (countString === 'No') {
						count = 0;
					} else {
						count = isNaN(countString) ? 0 : parseInt(countString);
					}
					wsCount = count;
				}
				let day = {};
				day['date'] = $(r).data('date');
				day['count'] = wsCount;
				var level = $(r).data('level');
				day['color'] =
					level >= 4 ? kGithubColorCode[4] : kGithubColorCode[level];
				week['days'].push(day);

				if (wsCount <= minCount) {
					minCount = wsCount;
				}
				if (wsCount > maxCount) {
					maxCount = wsCount;
				}
			});
		contributions.push(week);
	});
	contributions
		.filter(val => val.week != '0')
		.forEach(d => {
			contribData.push(d.days);
		});

	return {
		username: username,
		year: year,
		minCount: minCount,
		maxCount: maxCount,
		contributions: contribData
	};
};
