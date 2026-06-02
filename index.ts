import { fixed_from_gregorian, gregorian_from_fixed } from "./gregorian";
import { geez_from_fixed, fixed_from_geez } from "./geez";

export { GeezDate } from "./date";

export const geez_to_gregorian = (
  year: number,
  month: number,
  date: number,
) => {
  return gregorian_from_fixed(fixed_from_geez(year, month, date));
};

export const gregorian_to_geez = (
  year: number,
  month: number,
  date: number,
) => {
  return geez_from_fixed(fixed_from_gregorian(year, month, date));
};
