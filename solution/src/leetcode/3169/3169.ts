/**
 * 3169. Count Days Without Meetings
 * https://leetcode.com/problems/count-days-without-meetings
 */
export function countDays(days: number, meetings: number[][]): number {
  meetings.sort((a, b) => a[0] - b[0]);

  let availableDays = 0;
  let currentDay = 1;
  for (const [start, end] of meetings) {
    if (currentDay < start) {
      availableDays += start - currentDay;
    }
    currentDay = Math.max(currentDay, end + 1);
  }

  availableDays += days - currentDay + 1;
  return availableDays;
}
