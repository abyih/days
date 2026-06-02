import { fixed_from_gregorian, gregorian_from_fixed } from "./gregorian";
import { geez_from_fixed, fixed_from_geez } from "./geez";

export const geez_to_gregorian = () => {};

export const gregorian_to_geez = () => {
  return geez_from_fixed(fixed_from_gregorian(2002, 8, 25));
};

geez_to_gregorian();
