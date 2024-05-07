/**
 * 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
 * https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray
 */
export function longestMonotonicSubarray(nums: number[]): number {
  const n = nums.length;

  let answer = 1;
  let [inc, dec] = [1, 1];
  for (let i = 1; i < n; i++) {
    inc = nums[i - 1] < nums[i] ? inc + 1 : 1;
    dec = nums[i - 1] > nums[i] ? dec + 1 : 1;
    answer = Math.max(answer, inc, dec);
  }
  return answer;
}
