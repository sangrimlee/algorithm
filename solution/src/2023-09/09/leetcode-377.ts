/**
 * 377. Combination Sum IV
 * https://leetcode.com/problems/combination-sum-iv
 */
export function combinationSum4(nums: number[], target: number): number {
  const dp = new Array<number>(target + 1).fill(0);
  dp[0] = 1;

  for (let targetNum = 1; targetNum <= target; targetNum++) {
    for (const num of nums) {
      if (0 <= targetNum - num) {
        dp[targetNum] += dp[targetNum - num];
      }
    }
  }

  return dp[target];
}
