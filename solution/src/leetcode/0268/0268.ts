/**
 * 268. Missing Number
 * https://leetcode.com/problems/missing-number
 */
export function missingNumber(nums: number[]): number {
  const n = nums.length;
  let answer = (n * (n + 1)) / 2;
  for (const num of nums) {
    answer -= num;
  }
  return answer;
}
