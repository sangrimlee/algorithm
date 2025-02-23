/**
 * 2742. Painting the Walls
 * https://leetcode.com/problems/painting-the-walls
 */
export function paintWalls(cost: number[], time: number[]): number {
  const n = cost.length;
  const dp = new Array<number>(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = n; 0 <= j; j--) {
      dp[j] = Math.min(dp[j], dp[Math.max(0, j - time[i] - 1)] + cost[i]);
    }
  }
  return dp[n];
}
