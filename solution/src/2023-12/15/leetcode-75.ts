/**
 * 75. Sort Colors
 * https://leetcode.com/problems/sort-colors
 */
export function sortColors(nums: number[]): void {
  const numCount = [0, 0, 0];
  nums.forEach((num) => (numCount[num] += 1));

  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i < numCount[0]) {
      nums[i] = 0;
    } else if (i < numCount[0] + numCount[1]) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
}
