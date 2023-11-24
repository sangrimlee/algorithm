/**
 * 1295. Find Numbers with Even Number of Digits
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits
 */
export function findNumbers(nums: number[]): number {
  return nums.filter((num) => num.toString().length % 2 === 0).length;
}
