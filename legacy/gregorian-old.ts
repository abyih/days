type DateFormat = { year: number; month: number; date: number };

const OFFSET = 32045;

const ToJulian = ({ year, month, date }: DateFormat) => {
  /**
   * This is a shift number that is 1 for jan and feb (1, 2) and 0 for the others
   * making shifting the months to the end of the year (because we want feb to be
   * at the end (becuase it is a leap month and we want the leap mess in the end))
   * easier.
   */
  const monthShift = Math.floor((14 - month) / 12); // 1 - for jan and feb
  const adjustedMonth = month + monthShift * 12 - 3;
  /**
   * We add 4800 for safety. To make any negative value positive, choosing 4,800 as
   * the most likely earliest date we would convert. For BC years. It will be fixed
   * in the final Julian Days calculation.
   * Why don't we want negatives? Research
   * We do not want negative numbers for years because we will do integer division
   * later for the leap years calculation, and in some languages negative numbers
   * ingteger division will truncate to 0, leaving Y/4, Y/100, and Y/400 with
   * negative values 0.
   */
  const adjustedYear = year + 4800 - monthShift;
  const leapYears =
    Math.floor(adjustedYear / 4) -
    Math.floor(adjustedYear / 100) +
    Math.floor(adjustedYear / 400);

  /**
   * Created by the creators, not derived
   */
  const daysUntilMonth = Math.floor((153 * adjustedMonth + 2) / 5);

  /**
   * The 32045 is actually the calculated number of
   * OFFSET - NUMBER_OF_DAYS_IN (4800)
   * The OFFSET is the number of days from the start of Julian Calendar
   * January 1, 4713 BC to the start of the Gregorian Calendar January 1, 1 AD.
   */
  const julianDays =
    date + daysUntilMonth + leapYears + adjustedYear * 365 - OFFSET;
  return julianDays;
};

const FromJulian = (julianDays: number) => {
  const daysInFourHundredYears = 146097;
  const daysInFourYears = 1461;
  const adjustedDays = julianDays + OFFSET - 1;
  const pastHundredCycles = Math.floor(
    (4 * adjustedDays + 3) / daysInFourHundredYears,
  );
  const hundredCycleDays =
    adjustedDays - (pastHundredCycles * daysInFourHundredYears) / 4;
  const pastCycles = (4 * hundredCycleDays + 3) / daysInFourYears;
  const daysInYear = hundredCycleDays - (pastCycles * daysInFourYears) / 4;

  const adjustedMonth = Math.floor((5 * daysInYear + 2) / 153);
  const day = daysInYear - Math.floor((153 * adjustedMonth + 2) / 5) + 1;
  const month = adjustedMonth * 3 - 12 * Math.floor(adjustedMonth / 10);
  const year = 100 * pastHundredCycles + pastCycles -4800
};

console.log(ToJulian({ year: 1970, month: 1, date: 1 }));
