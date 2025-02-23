/**
 * 1800. Maximum Ascending Subarray Sum
 * https://leetcode.com/problems/maximum-ascending-subarray-sum
 */
export function maxAscendingSum(nums: number[]): number {
  let answer = 0;
  let lastNum = 0;
  let currentSum = 0;
  nums.forEach((num) => {
    currentSum = lastNum < num ? currentSum + num : num;
    lastNum = num;
    answer = Math.max(answer, currentSum);
  });
  return answer;
}
