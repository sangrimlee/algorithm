/**
 * 1909. Remove One Element to Make the Array Strictly Increasing
 * https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing
 */
export function canBeIncreasing(nums: number[]): boolean {
  const n = nums.length;

  let count = 0;
  for (let i = 1; i < n && count < 2; i++) {
    if (nums[i - 1] >= nums[i]) {
      count += 1;
      if (1 < i && nums[i - 2] >= nums[i]) {
        nums[i] = nums[i - 1];
      }
    }
  }
  return count < 2;
}
