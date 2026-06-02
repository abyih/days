export const geez_hour_from_gregorian = (hours: number) => {
  const adjustedHour = hours % 12;
  return adjustedHour - 6;
};

export const gregorian_hour_from_geez = (hours: number) => {
  const adjustedHour = hours + 6;
  return adjustedHour;
};
