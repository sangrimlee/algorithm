/**
 * 2997. Minimum Number of Operations to Make Array XOR Equal to K
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k
 */
export function minOperations(nums: number[], k: number): number {
  function countBit(num: number) {
    let count = 0;
    while (0 < num) {
      if ((num & 1) === 1) {
        count += 1;
      }
      num >>= 1;
    }
    return count;
  }

  return countBit(nums.reduce((acc, num) => acc ^ num, k));
}
