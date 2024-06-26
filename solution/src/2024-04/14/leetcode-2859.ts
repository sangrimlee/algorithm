/**
 * 2859. Sum of Values at Indices With K Set Bits
 * https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits
 */
export function sumIndicesWithKSetBits(nums: number[], k: number): number {
  function countBit(num: number) {
    let count = 0;
    while (0 < num) {
      count += num & 1;
      num = num >> 1;
    }
    return count;
  }

  return nums.reduce((acc, num, i) => (countBit(i) === k ? acc + num : acc), 0);
}
