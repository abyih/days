export const isYearLeap = (year: number) =>
  (year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0);

export const parseYearFirst = (value: RegExpMatchArray) => {
  const [_, y, m, d, h, min, s] = value;
  const year = y ? parseInt(y) : null;
  const month = m ? parseInt(m) : 1;
  const date = d ? parseInt(d) : 1;
  const hour = h ? parseInt(h) : 0;
  const minutes = min ? parseInt(min) : 0;
  const seconds = s ? parseInt(s) : 0;
  if (year) {
    if (
      month > 13 ||
      (isYearLeap(year) && month == 13 && date > 6) ||
      (month == 13 && date > 5)
    )
      return null;
    return {
      year,
      month,
      date,
      hour,
      minutes,
      seconds,
    };
  }
  return null;
};
