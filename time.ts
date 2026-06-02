export const geez_hour_from_gregorian = (hours: number) => {
  const adjustedHour = hours % 12;
  return adjustedHour - 6;
};
