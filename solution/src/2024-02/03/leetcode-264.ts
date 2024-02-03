/**
 * 264. Ugly Number II
 * https://leetcode.com/problems/ugly-number-ii
 */
export function nthUglyNumber(n: number): number {
  const dp = new Array(n).fill(0);
  dp[0] = 1;

  let [x, y, z] = [0, 0, 0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[x] * 2, dp[y] * 3, dp[z] * 5);
    if (dp[i] === dp[x] * 2) {
      x += 1;
    }
    if (dp[i] === dp[y] * 3) {
      y += 1;
    }
    if (dp[i] === dp[z] * 5) {
      z += 1;
    }
  }
  return dp[n - 1];
}
