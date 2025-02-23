import { range } from '@algorithm/lib';

/**
 * 2389. Longest Subsequence With Limited Sum
 * https://leetcode.com/problems/longest-subsequence-with-limited-sum/
 */
export function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const prefixSum = Array.from(nums);

  for (const i of range(1, n)) {
    prefixSum[i] += prefixSum[i - 1];
  }

  const binarySearch = (query: number) => {
    let [start, end] = [0, n];
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (prefixSum[mid] <= query) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return start;
  };

  return queries.map(binarySearch);
}
