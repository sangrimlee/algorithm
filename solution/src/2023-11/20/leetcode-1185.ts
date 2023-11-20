/**
 * 1185. Day of the Week
 * https://leetcode.com/problems/day-of-the-week
 */
export function dayOfTheWeek(day: number, month: number, year: number): string {
  const DAY_NAMES = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ] as const;
  const currentDay = new Date(year, month - 1, day).getDay();
  return DAY_NAMES[currentDay];
}
