/**
 * 1920. Build Array from Permutation
 * https://leetcode.com/problems/build-array-from-permutation
 */
export function buildArray(nums: number[]): number[] {
  return new Array(nums.length).fill(0).map((_, i) => nums[nums[i]]);
}
