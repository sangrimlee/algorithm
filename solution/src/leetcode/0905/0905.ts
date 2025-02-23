/**
 * 905. Sort Array By Parity
 * https://leetcode.com/problems/sort-array-by-parity
 */
export function sortArrayByParity(nums: number[]): number[] {
  let currentIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      [nums[currentIndex], nums[i]] = [nums[i], nums[currentIndex]];
      currentIndex += 1;
    }
  }
  return nums;
}
