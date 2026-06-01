import { fixed_from_gregorian, gregorian_from_fixed } from "./gregorian";
import { geez_from_fixed, fixed_from_geez } from "./geez";

const geez_to_gregorian = () => {
  return gregorian_from_fixed(fixed_from_geez(1994, 12, 19));
};

const gregorian_to_geez = () => {
  return geez_from_fixed(fixed_from_gregorian(2002, 8, 25));
};

console.log(geez_to_gregorian(), gregorian_to_geez());
