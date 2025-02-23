/**
 * 2357. Make Array Zero by Subtracting Equal Amounts
 * https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts
 */
export function minimumOperations(nums: number[]): number {
  return new Set(nums.filter((num) => num !== 0)).size;
}
