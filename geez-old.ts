const GEEZOFFSET = 1723856;
const COPTICOFFSET = 1824665;

export const separateDate = (...args: any) => {
  // @ts-ignore
  const date = new Date(...args);
  if (isNaN(date.getTime())) {
    console.log("Invalid Date");
  } else {
    const separatedDate = {
      year: date.getUTCFullYear(),
      month: date.getUTCMonth(),
      date: date.getUTCDate(),
    };
    return separatedDate;
  }
};

type DateFormat = { year: number; month: number; date: number };

export const ToJulian = (
  { year, month, date }: DateFormat,
  geez: boolean = true,
) => {
  const leapDays = Math.floor(year / 4); // More Research;
  const daysInYear = (month - 1) * 30 + (date - 1);
  const OFFSET = geez ? GEEZOFFSET : COPTICOFFSET;
  const julianDays = OFFSET + 365 + (year - 1) * 365 + leapDays + daysInYear;
  return julianDays;
};

export const FromJulian = (julianDays: number, geez: boolean = true) => {
  const OFFSET = geez ? GEEZOFFSET : COPTICOFFSET;
  const geezDays = julianDays - OFFSET;
  const yearsUnitlCycle = Math.floor(geezDays / 1461) * 4;
  const cycleDays = geezDays % 1461;
  const yearOnCycle =
    Math.floor(cycleDays / 365) - Math.floor(cycleDays / 1460);
  const year = yearsUnitlCycle + yearOnCycle;
  const yearDays = (cycleDays % 365) + 365 * Math.floor(cycleDays / 1460);
  const month = Math.floor(yearDays / 30) + 1;
  const day = (yearDays % 30) + 1;
  return {
    year,
    month,
    day,
  };
};

const fromCopticJulianToGeezJulian = (julianDays: number) => {
  return julianDays - (COPTICOFFSET - GEEZOFFSET);
};

// console.log(ToJulian(separateDate(new Date()), false));

const copticJulian = ToJulian({ year: 2026, month: 5, date: 18 }, false);
const geezJulian = ToJulian({ year: 2018, month: 9, date: 10 });
// const geezDate = FromJulian(geezJulian);
console.log(copticJulian, geezJulian);
// console.log(geezDate);
