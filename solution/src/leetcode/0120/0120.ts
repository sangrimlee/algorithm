/**
 * 120. Triangle
 * https://leetcode.com/problems/triangle/
 */
export function minimumTotal(triangle: number[][]): number {
  const MAX_NUM = Number.MAX_SAFE_INTEGER;
  const height = triangle.length;
  const dp = new Array(height)
    .fill(undefined)
    .map((_, i) => new Array<number>(i + 1).fill(MAX_NUM));
  dp[0][0] = triangle[0][0];

  for (let h = 1; h < height; h++) {
    for (let i = 0; i < h + 1; i++) {
      dp[h][i] = triangle[h][i] + Math.min(dp[h - 1][i - 1] ?? MAX_NUM, dp[h - 1][i] ?? MAX_NUM);
    }
  }

  return Math.min(...dp[height - 1]);
}
