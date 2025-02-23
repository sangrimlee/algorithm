/**
 * 746. Min Cost Climbing Stairs
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 */
export function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const dp = new Array<number>(n).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 2], dp[i - 1]);
  }
  return Math.min(dp[n - 2], dp[n - 1]);
}
