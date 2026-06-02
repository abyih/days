import { fixed_from_gregorian, gregorian_from_fixed } from "./gregorian";
import { geez_from_fixed, fixed_from_geez } from "./geez";
import { CustomDate, GeezDate } from "./date";

export { GeezDate, CustomDate };

export const geez_to_gregorian = (...args: any[]) => {
  try {
    const geezDate = new GeezDate(...args);
    const gregorianDate = gregorian_from_fixed(
      fixed_from_geez(
        geezDate.getFullYear(),
        geezDate.getMonth(),
        geezDate.getDate(),
      ),
    );
    return new CustomDate(
      gregorianDate.year,
      gregorianDate.month,
      gregorianDate.date,
      geezDate.getHours(),
      geezDate.getMinutes(),
      geezDate.getSeconds(),
    );
  } catch (err) {
    throw err;
  }
};

export const gregorian_to_geez = (...args: any[]) => {
  try {
    const gregorianDate = new Date(...(args as []));
    // if (args.length == 0) {
    //   gregorianDate = new Date();
    // } else if (args.length == 1) {
    //   gregorianDate = new Date(args[0]);
    // } else {
    //   const [year, month, date, hours, minutes, seconds] = args;
    //   gregorianDate = new Date(
    //     year,
    //     month ? month - 1 : 0,
    //     date ?? 1,
    //     hours ?? 0,
    //     minutes ?? 0,
    //     seconds ?? 0,
    //   );
    // }
    if (Number.isNaN(gregorianDate.getFullYear())) {
      throw "Invalid Date";
    }
    const geezDate = geez_from_fixed(
      fixed_from_gregorian(
        gregorianDate.getFullYear(),
        gregorianDate.getMonth() + 1,
        gregorianDate.getDate(),
      ),
    );
    return new GeezDate(
      geezDate.year,
      geezDate.month,
      geezDate.date,
      gregorianDate.getHours(),
      gregorianDate.getMinutes(),
      gregorianDate.getSeconds(),
    );
  } catch (err) {
    throw err;
  }
};
