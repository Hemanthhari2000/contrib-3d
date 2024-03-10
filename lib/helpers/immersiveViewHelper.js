import { kGithubColorCode } from '../constants';

export const roundOff = num => {
	return Math.round(num * 100 + Number.EPSILON) / 100;
};

export const getSaturatedColorCodesBasedOnCount = count => {
	return kGithubColorCode[count % 10];
};
