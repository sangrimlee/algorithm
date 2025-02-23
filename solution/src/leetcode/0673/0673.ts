import { range } from '@algorithm/lib';

/**
 * 673. Number of Longest Increasing Subsequence
 * https://leetcode.com/problems/number-of-longest-increasing-subsequence
 */
export function findNumberOfLIS(nums: number[]): number {
  const n = nums.length;
  const counts = new Array<number>(n).fill(1);
  const lengths = new Array<number>(n).fill(1);

  for (const i of range(n)) {
    for (const j of range(0, i)) {
      if (nums[i] <= nums[j]) {
        continue;
      }
      if (lengths[i] < lengths[j] + 1) {
        lengths[i] = lengths[j] + 1;
        counts[i] = 0;
      }
      if (lengths[i] === lengths[j] + 1) {
        counts[i] += counts[j];
      }
    }
  }

  const maxLength = lengths.reduce((maxLen, len) => Math.max(maxLen, len), 0);
  return counts.filter((_, i) => lengths[i] === maxLength).reduce((prev, cnt) => prev + cnt, 0);
}
