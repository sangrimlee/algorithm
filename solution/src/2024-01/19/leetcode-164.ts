/**
 * 164. Maximum Gap
 * https://leetcode.com/problems/maximum-gap
 */
export function maximumGap(nums: number[]): number {
  return nums
    .sort((a, b) => a - b)
    .reduce((prev, num, i) => (i === 0 ? prev : Math.max(prev, Math.abs(nums[i - 1] - num))), 0);
}
