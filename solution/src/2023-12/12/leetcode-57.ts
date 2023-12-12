/**
 * 57. Insert Interval
 * https://leetcode.com/problems/insert-interval
 */
export function insert(intervals: number[][], newInterval: number[]): number[][] {
  const n = intervals.length;
  const inserted = [];

  let currentIndex = 0;
  let [start, end] = newInterval;
  while (currentIndex < n && intervals[currentIndex][1] < start) {
    inserted.push(intervals[currentIndex]);
    currentIndex += 1;
  }
  while (currentIndex < n && intervals[currentIndex][0] <= end) {
    start = Math.min(start, intervals[currentIndex][0]);
    end = Math.max(end, intervals[currentIndex][1]);
    currentIndex += 1;
  }
  inserted.push([start, end]);
  while (currentIndex < n) {
    inserted.push(intervals[currentIndex]);
    currentIndex += 1;
  }
  return inserted;
}
