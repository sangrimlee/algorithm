/**
 * 2778. Sum of Squares of Special Elements
 * https://leetcode.com/problems/sum-of-squares-of-special-elements
 */
export function sumOfSquares(nums: number[]): number {
  const n = nums.length;
  return nums.reduce((acc, num, i) => (n % (i + 1) === 0 ? acc + num ** 2 : acc), 0);
}
