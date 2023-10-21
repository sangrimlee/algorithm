/**
 * 674. Longest Continuous Increasing Subsequence
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence
 */
export function findLengthOfLCIS(nums: number[]): number {
  let answer = 1;
  let start = 0;
  for (let end = 1; end < nums.length; end++) {
    if (nums[end - 1] < nums[end]) {
      answer = Math.max(answer, end - start + 1);
    } else {
      start = end;
    }
  }
  return answer;
}
