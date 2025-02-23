/**
 * 896. Monotonic Array
 * https://leetcode.com/problems/monotonic-array
 */
export function isMonotonic(nums: number[]): boolean {
  if (nums.length <= 2) {
    return true;
  }

  const lastDiff = nums[nums.length - 1] - nums[0];
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if ((lastDiff === 0 && diff !== 0) || lastDiff * diff < 0) {
      return false;
    }
  }

  return true;
}
