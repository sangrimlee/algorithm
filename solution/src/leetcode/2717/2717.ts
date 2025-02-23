/**
 * 2717. Semi-Ordered Permutation
 * https://leetcode.com/problems/semi-ordered-permutation
 */
export function semiOrderedPermutation(nums: number[]): number {
  const n = nums.length;
  const first = nums.findIndex((num) => num === 1);
  const last = nums.findIndex((num) => num === n);
  const operations = first + (n - 1 - last);
  return first <= last ? operations : operations - 1;
}
