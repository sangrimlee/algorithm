/**
 * 3386. Button with Longest Push Time
 * https://leetcode.com/problems/button-with-longest-push-time
 */
export function buttonWithLongestTime(events: number[][]): number {
  let longestTime = 0;
  let longestIndex = 0;
  let prevTime = 0;
  for (const [index, time] of events) {
    const currentTime = time - prevTime;
    if (longestTime < currentTime) {
      [longestTime, longestIndex] = [currentTime, index];
    } else if (longestTime === currentTime) {
      longestIndex = Math.min(index, longestIndex);
    }
    prevTime = time;
  }
  return longestIndex;
}
