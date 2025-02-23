/**
 * 2765. Longest Alternating Subarray
 * https://leetcode.com/problems/longest-alternating-subarray
 */
export function alternatingSubarray(nums: number[]): number {
  let answer = 1;
  let start = 0;
  for (let end = 1; end < nums.length; end++) {
    if (nums[end] - nums[start] !== (end - start) % 2) {
      start = nums[end - 1] + 1 === nums[end] ? end - 1 : end;
    }
    answer = Math.max(answer, end - start + 1);
  }
  return answer === 1 ? -1 : answer;
}
