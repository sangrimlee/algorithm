/**
 * 2446. Determine if Two Events Have Conflict
 * https://leetcode.com/problems/determine-if-two-events-have-conflict
 */
export function haveConflict(event1: string[], event2: string[]): boolean {
  function convertTime(time: string) {
    const [hour, minute] = time.split(':').map((v) => parseInt(v));
    return 60 * hour + minute;
  }
  const [startTime1, endTime1] = event1.map(convertTime);
  const [startTime2, endTime2] = event2.map(convertTime);
  return Math.max(startTime1, startTime2) <= Math.min(endTime1, endTime2);
}
