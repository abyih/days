const EPOCH = 2796;

export const fixed_from_geez = (year: number, month: number, day: number) => {
  const yearDays = 365 * (year - 1);
  const leapDaysCount = Math.floor(year / 4);
  const monthDays = 30 * (month - 1);
  const fixedDays = EPOCH - 1 + yearDays + leapDaysCount + monthDays + day;
  return fixedDays;
};

export const geez_from_fixed = (fixed: number) => {
  const geezDays = fixed - EPOCH;
  const cycle = 4;
  const leapYears = 1;
  const daysInCommonYear = 365;
  const shift = 1;
  const commonDaysInCycle = cycle * daysInCommonYear;
  const denominator = commonDaysInCycle + leapYears; // 1461;
  const numeratorConstant =
    cycle + commonDaysInCycle + leapYears - 1 - ((leapYears * shift) % cycle); // 1463;
  const year = Math.floor((cycle * geezDays + numeratorConstant) / denominator);
  const month = Math.floor((fixed - fixed_from_geez(year, 1, 1)) / 30) + 1;
  const date = fixed - fixed_from_geez(year, month, 1) + 1;
  return { year, month, date };
};
