import { range } from '@algorithm/lib';

/**
 * 1547. Minimum Cost to Cut a Stick
 * https://leetcode.com/problems/minimum-cost-to-cut-a-stick
 */
export function minCost(n: number, cuts: number[]): number {
  const points = [...cuts, 0, n].sort((a, b) => a - b);
  const p = points.length;
  const dp = Array.from({ length: p }).map(() => new Array<number>(p).fill(0));

  for (const diff of range(2, p)) {
    for (const start of range(p - diff)) {
      const end = start + diff;
      let minCost = Number.MAX_SAFE_INTEGER;
      for (const mid of range(start + 1, end)) {
        minCost = Math.min(minCost, dp[start][mid] + dp[mid][end] + points[end] - points[start]);
      }
      dp[start][end] = minCost;
    }
  }

  return dp[0][p - 1];
}
