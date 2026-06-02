export const isYearLeap = (year: number) =>
  (year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0);

export const parseYearFirst = (value: RegExpMatchArray) => {
  const [_, y, m, d, h, min, s] = value;
  const year = y ? parseInt(y) : null;
  const month = m ? parseInt(m) : 1;
  const date = d ? parseInt(d) : 1;
  const hour = h ? parseInt(h) : 0;
  const minute = min ? parseInt(min) : 0;
  const second = s ? parseInt(s) : 0;
  if (year) {
    if (
      month > 13 ||
      date > 30 ||
      (isYearLeap(year) && month == 13 && date > 6) ||
      (month == 13 && date > 5)
    )
      return null;
    return {
      year,
      month,
      date,
      hour,
      minute,
      second,
    };
  }
  return null;
};
