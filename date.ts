import { fixed_from_gregorian, gregorian_from_fixed } from "./gregorian";
import { geez_from_fixed, fixed_from_geez } from "./geez";
import { YearFirstRegEX } from "./regex";
import { parseYearFirst } from "./utils";

const dayMap = {
  "0": "ሰንበት",
  "1": "ሰኑይ",
  "2": "ሰሉስ",
  "3": "ረቡዕ",
  "4": "ሓሙስ",
  "5": "ዓርቢ",
  "6": "ቀዳም",
};

type dayMapIndex = "0" | "1" | "2" | "3" | "4" | "5" | "6";

type GeezDateType = {
  year: number;
  month: number;
  date: number;
  hours: number;
  minute: number;
  second: number;
};

// interface GeezDate {}

// interface GeezDateConstructor {
//   new (): GeezDate;
//   new (value: number | string): GeezDate;
//   new (
//     year: number,
//     month?: number,
//     date?: number,
//     hours?: number,
//     minute?: number,
//     second?: number,
//   ): GeezDate;

//   parse(): GeezDateType | null;
// }

class GeezDate {
  private year: number = 0;
  private month: number = 1;
  private date: number = 1;
  private hour: number = 0;
  private minute: number = 0;
  private second: number = 0;

  constructor();
  constructor(value: number | string);
  constructor(
    year: number,
    month?: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
  );

  constructor(...args: any[]) {
    if (args.length == 0) {
      const today = new Date();
      const { year, month, date } = geez_from_fixed(
        fixed_from_gregorian(
          today.getFullYear(),
          today.getMonth() + 1,
          today.getDate(),
        ),
      );
      this.year = year;
      this.month = month;
      this.date = date;
    } else if (args.length == 1) {
      if (typeof args[0] == "string") {
        const result = GeezDate.parse(args[0]);
        if (result != null) {
          const { year, month, date, hour, minute, second } = result;
          this.year = year;
          this.month = month;
          this.date = date;
          this.hour = hour;
          this.minute = minute;
          this.second = second;
        } else {
          throw TypeError("Invalid Date");
        }
      } else if (typeof args[0] == "number") {
        this.year = args[0];
      }
    } else if (args.length > 1) {
      const [year, month, date, hour, minute, second] = args;
      this.year = year;
      this.month = month;
      this.date = date;
      this.hour = hour;
      this.minute = minute;
      this.second = second;
    }
  }

  getFullYear() {
    return this.year;
  }

  getMonth() {
    return this.month;
  }

  getDate() {
    return this.date;
  }

  getDay() {
    const day = fixed_from_geez(this.year, this.month, this.date) % 7;
    const dayIndex = day.toString() as dayMapIndex;
    return dayMap[dayIndex];
  }

  static parse(value: string) {
    const result = value.match(YearFirstRegEX);
    if (result != null) {
      return parseYearFirst(result);
    }
  }
}

const date = new GeezDate("2014-12-30");
console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getDay());
date.getDay();
