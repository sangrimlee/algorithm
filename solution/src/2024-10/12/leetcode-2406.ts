/**
 * 2406. Divide Intervals Into Minimum Number of Groups
 * https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups
 */
export function minGroups(intervals: number[][]): number {
  let [minStart, maxEnd] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  for (const [start, end] of intervals) {
    minStart = Math.min(minStart, start);
    maxEnd = Math.max(maxEnd, end);
  }

  const points = new Array<number>(maxEnd + 2).fill(0);
  for (const [start, end] of intervals) {
    points[start] += 1;
    points[end + 1] -= 1;
  }

  let concurrentIntervals = 0;
  let maxConcurrentIntervals = 0;
  for (let i = minStart; i <= maxEnd; i++) {
    concurrentIntervals += points[i];
    maxConcurrentIntervals = Math.max(maxConcurrentIntervals, concurrentIntervals);
  }
  return maxConcurrentIntervals;
}
