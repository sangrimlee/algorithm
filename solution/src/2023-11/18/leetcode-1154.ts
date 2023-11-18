/**
 * 1154. Day of the Year
 * https://leetcode.com/problems/day-of-the-year
 */
export function dayOfYear(date: string): number {
  const msOfDay = 24 * 60 * 60 * 1000;
  const currentDate = new Date(date);
  const firstDateOfYear = new Date(currentDate.getFullYear(), 0, 1);
  return Math.floor((currentDate.getTime() - firstDateOfYear.getTime()) / msOfDay) + 1;
}
