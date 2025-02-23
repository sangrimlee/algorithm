/**
 * 56. Merge Intervals
 * https://leetcode.com/problems/merge-intervals
 */
export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  const answer: number[][] = [];
  for (const [start, end] of intervals) {
    if (answer.length === 0 || answer[answer.length - 1][1] < start) {
      answer.push([start, end]);
    } else {
      answer[answer.length - 1][1] = Math.max(answer[answer.length - 1][1], end);
    }
  }

  return answer;
}
