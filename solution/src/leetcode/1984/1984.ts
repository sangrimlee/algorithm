/**
 * 1984. Minimum Difference Between Highest and Lowest of K Scores
 * https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores
 */
export function minimumDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = k - 1; i < nums.length; i++) {
    answer = Math.min(answer, nums[i] - nums[i - k + 1]);
  }
  return answer;
}
