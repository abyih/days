import { isYearLeap } from "./utils";

const fixed_year_from_gregorian = (year: number) => {
  const daysUntilYear = 365 * (year - 1);
  const leapYearsCount =
    Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
  const yearDays = daysUntilYear + leapYearsCount;
  return yearDays;
};

const fixed_month_from_gregorian = (year: number, month: number) => {
  const yearIsLeap = isYearLeap(year);
  const elapsed30Days = 30 * (month - 1);
  const elapsed31stDays = Math.floor((7 * month - 2) / 12);
  const correction = month <= 2 ? 0 : yearIsLeap ? 1 : 2;
  const monthDays = elapsed30Days + elapsed31stDays - correction;
  return monthDays;
};

const fixed_from_gregorian = (year: number, month: number, day: number) => {
  const yearDays = fixed_year_from_gregorian(year);
  const monthDays = fixed_month_from_gregorian(year, month);

  const fixedDays = yearDays + monthDays + day;
  return fixedDays;
};

const gregorian_year_from_fixed = (fixed: number) => {
  const n400 = Math.floor(fixed / 146097);
  const l400 = fixed % 146097;
  const n100 = Math.floor(l400 / 36524);
  const l100 = l400 % 36524;
  const n4 = Math.floor(l100 / 1461);
  const l4 = l100 % 1461;
  const n1 = Math.floor(l4 / 365);

  const year =
    n400 * 400 + n100 * 100 + n4 * 4 + n1 + (n100 == 4 && n1 == 4 ? 0 : 1);
  return { year, daysWithinYear: l4 % 365 };
};

const gregorian_from_fixed = (fixed: number) => {
  const { year, daysWithinYear } = gregorian_year_from_fixed(fixed);
  const correction =
    fixed < fixed_from_gregorian(year, 3, 1) ? 0 : isYearLeap(year) ? 1 : 2;
  const adjustedDays = fixed - fixed_from_gregorian(year, 1, 1) + correction;
  const month = Math.floor((12 * adjustedDays + 373) / 367);
  const day = fixed - fixed_from_gregorian(year, month, 1) + 1;
  console.log(year, month, day);
};
