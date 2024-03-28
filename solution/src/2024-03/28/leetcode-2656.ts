/**
 * 2656. Maximum Sum With Exactly K Elements
 * https://leetcode.com/problems/maximum-sum-with-exactly-k-elements
 */
export function maximizeSum(nums: number[], k: number): number {
  const maxNum = nums.reduce((max, num) => (max < num ? num : max), 0);
  return maxNum * k + (k * (k - 1)) / 2;
}
