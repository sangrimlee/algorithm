/**
 * 3423. Maximum Difference Between Adjacent Elements in a Circular Array
 * https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array
 */
export function maxAdjacentDistance(nums: number[]): number {
  return nums.reduce((prev, _, i) => Math.max(prev, adjacentDistance(nums, i)), 0);
}

function adjacentDistance(nums: number[], i: number): number {
  return Math.abs(nums[i] - nums[(i + 1) % nums.length]);
}
