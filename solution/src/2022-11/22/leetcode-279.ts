/**
 * 279. Perfect Squares
 * https://leetcode.com/problems/perfect-squares/
 */
export function numSquares(n: number): number {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 1; i <= Math.sqrt(n); i++) {
    dp[i ** 2] = 1;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
    }
  }
  return dp[n];
}
