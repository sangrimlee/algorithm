/**
 * 435. Non-overlapping Intervals
 * https://leetcode.com/problems/non-overlapping-intervals
 */
export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);

  let answer = 0;
  let lastEnd = Number.MIN_SAFE_INTEGER;
  for (const [start, end] of intervals) {
    if (lastEnd <= start) {
      lastEnd = end;
    } else {
      answer += 1;
    }
  }

  return answer;
}
