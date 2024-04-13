/**
 * 2855. Minimum Right Shifts to Sort the Array
 * https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array
 */
export function minimumRightShifts(nums: number[]): number {
  const n = nums.length;
  let pivotIndex = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i]) {
      if (pivotIndex !== 0) {
        return -1;
      }
      pivotIndex = i;
    }
  }
  if (pivotIndex === 0) {
    return 0;
  }
  return nums[0] < nums[n - 1] ? -1 : n - pivotIndex;
}
