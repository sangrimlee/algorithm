/**
 * 1360. Number of Days Between Two Dates
 * https://leetcode.com/problems/number-of-days-between-two-dates
 */
export function daysBetweenDates(date1: string, date2: string): number {
  const DAY = 24 * 60 * 60 * 1000;
  const getTime = (date: string) => new Date(date).getTime();
  return Math.floor(Math.abs(getTime(date1) - getTime(date2)) / DAY);
}
