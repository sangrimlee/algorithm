/**
 * 2317. Maximum XOR After Operations
 * https://leetcode.com/problems/maximum-xor-after-operations
 */
export function maximumXOR(nums: number[]): number {
  return nums.reduce((answer, num) => answer | num, 0);
}
