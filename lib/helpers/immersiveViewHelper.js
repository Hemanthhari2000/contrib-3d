import { kGithubColorCode } from '../constants';

export const roundOff = num => {
	return Math.round(num * 100 + Number.EPSILON) / 100;
};

export const getSaturatedColorCodesBasedOnCount = count => {
	if (count === 0) {
		return '#161b22';
	}
	return kGithubColorCode[count % 10];
};
