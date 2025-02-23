/**
 * 41. First Missing Positive
 * https://leetcode.com/problems/first-missing-positive
 */
export function firstMissingPositive(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (0 < nums[i] && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const num = nums[i];
      [nums[i], nums[num - 1]] = [nums[num - 1], num];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}
