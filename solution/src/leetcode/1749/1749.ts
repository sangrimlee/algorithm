/**
 * 1749. Maximum Absolute Sum of Any Subarray
 * https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/
 */
export function maxAbsoluteSum(nums: number[]): number {
  let answer = 0;
  let maxEnding = 0;
  let minEnding = 0;
  for (const num of nums) {
    minEnding = Math.min(minEnding + num, num);
    maxEnding = Math.max(maxEnding + num, num);
    answer = Math.max(answer, maxEnding, Math.abs(minEnding));
  }
  return answer;
}
