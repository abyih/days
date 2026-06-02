import { fixed_from_gregorian, gregorian_from_fixed } from "./gregorian";
import { geez_from_fixed, fixed_from_geez } from "./geez";
import { dayMap, YearFirstRegEX } from "./data";
import { parseYearFirst } from "./utils";
import { geez_hour_from_gregorian } from "./time";
import type { dayMapIndex } from "./types";
import { TokenFlags } from "typescript";

export class CustomDate extends Date {
  private language: "gz" | "en" = "en";

  constructor(...args: any[]) {
    super(...(args as []));
  }

  override getDay() {
    return (
      fixed_from_gregorian(
        this.getFullYear(),
        this.getMonth(),
        this.getDate(),
      ) % 7
    );
  }

  getDayName() {
    const dayIndex = this.getDay().toString() as dayMapIndex;
    return dayMap[dayIndex][this.language];
  }
}

export class GeezDate {
  private year: number = 0;
  private month: number = 1;
  private date: number = 1;
  private hour: number = 0;
  private minute: number = 0;
  private second: number = 0;
  private language: "gz" | "en" = "gz";

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
  constructor(...args: any[]);

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
      // const hours = geez_hour_from_gregorian(today.getHours());
      this.year = year;
      this.month = month;
      this.date = date;
      this.hour = today.getHours();
      this.minute = today.getMinutes();
      this.second = today.getSeconds();
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
    return fixed_from_geez(this.year, this.month, this.date) % 7;
  }

  getDayName() {
    const dayIndex = this.getDay().toString() as dayMapIndex;
    return dayMap[dayIndex][this.language];
  }

  getHours() {
    return this.hour;
  }

  getMinutes() {
    return this.minute;
  }

  getSeconds() {
    return this.second;
  }

  static parse(value: string) {
    const result = value.match(YearFirstRegEX);
    if (result != null) {
      return parseYearFirst(result);
    }
  }
}
