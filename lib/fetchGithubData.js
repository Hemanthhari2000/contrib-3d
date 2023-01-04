import * as cheerio from "cheerio";
import got from "got";
import { kGithubColorCode } from "./constants";

const fetchData = async (username, year) => {
	const url = `https://github.com/${username}?tab=overview&from=${year}-12-01&to=${year}-12-31`;
	let data;
	try {
		data = await got.get(url);
		return data.body;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const fetchContribData = async (username) => {
	let contributions = [];
	let contribData = [];
	let minCount = 0;
	let maxCount = 0;
	let year = "2022";
	let data = await fetchData(username, year);
	if (!data) {
		return null;
	}
	const $ = cheerio.load(data);
	let weeks = $(".js-yearly-contributions svg > g g");

	weeks.each((i, w) => {
		let week = {};
		week["week"] = i;
		week["days"] = [];
		$(w)
			.find("rect")
			.each((j, r) => {
				let day = {};
				day["date"] = $(r).data("date");
				day["count"] = $(r).data("count");
				var level = $(r).data("level");
				day["color"] =
					level >= 4 ? kGithubColorCode[4] : kGithubColorCode[level];
				week["days"].push(day);

				if ($(r).data("count") <= minCount) {
					minCount = $(r).data("count");
				}
				if ($(r).data("count") > maxCount) {
					maxCount = $(r).data("count");
				}
			});
		contributions.push(week);
	});
	contributions
		.filter((val) => val.week != "0")
		.forEach((d) => {
			contribData.push(d.days);
		});

	return {
		username: username,
		minCount: minCount,
		maxCount: maxCount,
		contributions: contribData,
	};
};
