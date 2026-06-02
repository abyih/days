import { fixed_from_gregorian, gregorian_from_fixed } from "./gregorian";
import { geez_from_fixed, fixed_from_geez } from "./geez";
import { YearFirstRegEX } from "./regex";
import { parseYearFirst } from "./utils";

class GeezDate {
  private year: number;
  private month: number;
  private date: number;
  private hour: number;
  private minute: number;
  private second: number;
  constructor(
    year: number,
    month: number,
    date: number,
    hour: number,
    minute: number,
    second: number,
  ) {
    this.year = year;
    this.month = month;
    this.date = date;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  getFullYear() {
    return this.year;
  }

  static parse(value: string) {
    const result = value.match(YearFirstRegEX);
    if (result != null) {
      return parseYearFirst(result);
    }
  }
}

class GeezDateConstructor {
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
      console.log(args);
    }
    if (args.length == 1) {
      if (typeof args[0] == "string") {
        const result = GeezDate.parse(args[0]);
        if (result != null) {
          const { year, month, date, hour, minutes, seconds } = result;
        }
      }
      if (typeof args[0] == "number") {
      }
    }
    if (args.length > 1) {
    }
  }
}

export const geez_to_gregorian = () => {
  const date = new GeezDateConstructor("22-23-12");
  // return gregorian_from_fixed(fixed_from_geez(1994, 12, 19));
};

export const gregorian_to_geez = () => {
  return geez_from_fixed(fixed_from_gregorian(2002, 8, 25));
};

geez_to_gregorian();
