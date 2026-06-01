const fixed_from_gregorian = (year: number, month: number, day: number) => {
  const daysUntilYear = 365 * (year - 1);
  const leapYearsCount =
    Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
  const yearDays = daysUntilYear + leapYearsCount;

  const yearIsLeap =
    (year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0);
  const elapsed30Days = 30 * (month - 1);
  const elapsed31stDays = Math.floor((7 * month - 2) / 12);
  const correction = month <= 2 ? 0 : yearIsLeap ? 1 : 2;
  const monthDays = elapsed30Days + elapsed31stDays - correction;

  const fixedDays = yearDays + monthDays + day;
  return fixedDays;
};
