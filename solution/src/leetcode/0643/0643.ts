import { range } from '@algorithm/lib';

/**
 * 643. Maximum Average Subarray I
 * https://leetcode.com/problems/maximum-average-subarray-i
 */
export function findMaxAverage(nums: number[], k: number): number {
  const n = nums.length;

  let totalValue = nums.slice(0, k).reduce((acc, num) => acc + num, 0);
  let maxAverage = totalValue / k;
  for (const i of range(n - k)) {
    totalValue += nums[i + k] - nums[i];
    maxAverage = Math.max(totalValue / k, maxAverage);
  }

  return maxAverage;
}
