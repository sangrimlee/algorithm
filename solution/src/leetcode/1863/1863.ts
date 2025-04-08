/**
 * 1863. Sum of All Subset XOR Totals
 * https://leetcode.com/problems/sum-of-all-subset-xor-totals
 */
export function subsetXORSum(nums: number[]): number {
  const n = nums.length;
  const totalOR = nums.reduce((prev, num) => prev | num, 0);
  return totalOR << (n - 1);
}
