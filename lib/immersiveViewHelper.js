import { kGithubColorCode } from "./constants";

export const roundOff = (num) => {
  return Math.round(num * 100 + Number.EPSILON) / 100;
};

export const getSaturatedColorCodesBasedOnCount = (colorFromApiData, count) => {
  if (count > 4) {
    return "#39d353";
  }
  return kGithubColorCode[colorFromApiData];
};
