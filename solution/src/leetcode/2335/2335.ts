/**
 * 2335. Minimum Amount of Time to Fill Cups
 * https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups
 */
export function fillCups(amount: number[]): number {
  function max(nums: number[]) {
    return nums.reduce((prev, num) => (prev > num ? prev : num), Number.MIN_SAFE_INTEGER);
  }

  function sum(nums: number[]) {
    return nums.reduce((prev, num) => prev + num, 0);
  }

  return Math.max(max(amount), Math.ceil(sum(amount) / 2));
}
