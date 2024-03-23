/**
 * 2600. K Items With the Maximum Sum
 * https://leetcode.com/problems/k-items-with-the-maximum-sum
 */
export function kItemsWithMaximumSum(
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number,
): number {
  return Math.min(k, numOnes) - Math.max(0, k - numOnes - numZeros);
}
