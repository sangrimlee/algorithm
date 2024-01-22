/**
 * 2016. Maximum Difference Between Increasing Elements
 * https://leetcode.com/problems/maximum-difference-between-increasing-elements
 */
export function maximumDifference(nums: number[]): number {
  let answer = -1;
  let prevMin = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    if (prevMin < num) {
      answer = Math.max(answer, num - prevMin);
    } else {
      prevMin = num;
    }
  }
  return answer;
}
