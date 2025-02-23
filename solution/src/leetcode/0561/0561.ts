import { range } from '@algorithm/lib';

/**
 * 561. Array Partition
 * https://leetcode.com/problems/array-partition
 */
export function arrayPairSum(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  return [...range(0, n, 2)].reduce((acc, i) => acc + Math.min(nums[i], nums[i] + 1), 0);
}
