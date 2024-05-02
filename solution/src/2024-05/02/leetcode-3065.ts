/**
 * 3065. Minimum Operations to Exceed Threshold Value I
 * https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i
 */
export function minOperations(nums: number[], k: number): number {
  return nums.reduce((count, num) => (num < k ? count + 1 : count), 0);
}
