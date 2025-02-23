/**
 * 3190. Find Minimum Operations to Make All Elements Divisible by Three
 * https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three
 */
export function minimumOperations(nums: number[]): number {
  return nums.reduce((prev, num) => (num % 3 === 0 ? prev : prev + 1), 0);
}
