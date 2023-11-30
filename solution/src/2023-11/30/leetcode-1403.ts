/**
 * 1403. Minimum Subsequence in Non-Increasing Order
 * https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order
 */
export function minSubsequence(nums: number[]): number[] {
  nums.sort((a, b) => b - a);

  const answer: number[] = [];
  let remain = nums.reduce((acc, num) => acc + num, 0);
  let current = 0;
  while (current <= remain) {
    const num = nums[answer.length];
    remain -= num;
    current += num;
    answer.push(num);
  }
  return answer;
}
