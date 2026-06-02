export const YearFirstRegEX =
  /^(\d{4})(?:[- \/\\](\d{1,2}))?(?:[- \/\\](\d{1,2}))? ?(?:(\d{1,2}):(\d{1,2}):?(\d{1,2})?)?$/;
// const YearLastRegEx = /[]/;

export const dayMap = {
  "0": {
    gz: "ሰንበት",
    en: "Sunday",
  },
  "1": {
    gz: "ሰኑይ",
    en: "Monday",
  },
  "2": { gz: "ሰሉስ", en: "Tuesday" },
  "3": { gz: "ረቡዕ", en: "Wednesday" },
  "4": { gz: "ሓሙስ", en: "Thursday" },
  "5": { gz: "ዓርቢ", en: "Friday" },
  "6": { gz: "ቀዳም", en: "Saturday" },
};
