/**
 * 629. K Inverse Pairs Array
 * https://leetcode.com/problems/k-inverse-pairs-array
 */
export function kInversePairs(n: number, k: number): number {
  function sum(n: number) {
    return (n * (n - 1)) / 2;
  }
  const MOD = 10 ** 9 + 7;
  if (k < 0 || k > sum(n)) {
    return 0;
  }
  if (k === 0 || k === sum(n)) {
    return 1;
  }
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(k + 1).fill(0));
  dp[2][0] = 1;
  dp[2][1] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= Math.min(k, sum(i)); j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      if (i <= j) {
        dp[i][j] -= dp[i - 1][j - i];
      }
      dp[i][j] = (dp[i][j] + MOD) % MOD;
    }
  }
  return dp[n][k];
}
