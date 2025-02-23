import { range } from '@algorithm/lib';

/**
 * 283. Move Zeroes
 * https://leetcode.com/problems/move-zeroes
 */
export function moveZeroes(nums: number[]): void {
  let nonZeroIndex = 0;
  for (const num of nums) {
    if (num !== 0) {
      nums[nonZeroIndex] = num;
      nonZeroIndex += 1;
    }
  }
  for (const zeroIndex of range(nonZeroIndex, nums.length)) {
    nums[zeroIndex] = 0;
  }
}
