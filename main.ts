const OFFSET = 1723856;
const toJulianDays = (year: number, month: number, days: number) => {
  const leapDays = Math.floor(year / 4); // More Research;
  const daysInYear = (month - 1) * 30 + (days - 1);
  const julianDays = OFFSET + 365 + (year - 1) * 365 + leapDays + daysInYear;
  return julianDays;
};

const toGeezDate = (julianDays: number) => {
  const geezDays = julianDays - OFFSET;
  const yearsUnitlCycle = Math.floor(geezDays / 1461) * 4;
  const cycleDays = geezDays % 1461;
  const yearOnCycle =
    Math.floor(cycleDays / 365) - Math.floor(cycleDays / 1460);
  const year = yearsUnitlCycle + yearOnCycle;
  const yearDays = (cycleDays % 365) + 365 * Math.floor(cycleDays / 1460);
  const month = Math.floor(yearDays / 30) + 1;
  const days = (yearDays % 30) + 1;
  return `${year}, ${month}, ${days}`;
};

console.log(toJulianDays(2016, 1, 1), "---", toGeezDate(2460200));
