/**
 * 1863. Sum of All Subset XOR Totals
 * https://leetcode.com/problems/sum-of-all-subset-xor-totals
 */
export function subsetXORSum(nums: number[]): number {
  function backtrack(prev: number, i: number): number {
    if (i === nums.length) {
      return prev;
    }
    let ret = 0;
    const num = nums[i];
    ret += backtrack(prev ^ num, i + 1);
    ret += backtrack(prev, i + 1);
    return ret;
  }
  return backtrack(0, 0);
}
