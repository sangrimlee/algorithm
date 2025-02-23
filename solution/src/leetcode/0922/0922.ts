/**
 * 922. Sort Array By Parity II
 * https://leetcode.com/problems/sort-array-by-parity-ii
 */
export function sortArrayByParityII(nums: number[]): number[] {
  const swap = (i: number, j: number) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  const n = nums.length;
  let [even, odd] = [0, 1];
  while (even < n && odd < n) {
    while (even < n && nums[even] % 2 === 0) {
      even += 2;
    }
    while (odd < n && nums[odd] % 2 === 1) {
      odd += 2;
    }
    if (even < n && odd < n) {
      swap(even, odd);
    }
  }

  return nums;
}
