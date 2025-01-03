/**
 * 2270. Number of Ways to Split Array
 * https://leetcode.com/problems/number-of-ways-to-split-array
 */
export function waysToSplitArray(nums: number[]): number {
  const n = nums.length;
  const total = nums.reduce((acc, num) => acc + num, 0);

  let sum = 0;
  let answer = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += nums[i];
    if (total <= 2 * sum) {
      answer += 1;
    }
  }
  return answer;
}
