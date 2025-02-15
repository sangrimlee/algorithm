/**
 * 313. Super Ugly Number
 * https://leetcode.com/problems/super-ugly-number
 */
export function nthSuperUglyNumber(n: number, primes: number[]): number {
  const m = primes.length;
  const dp = new Array<number>(n).fill(Number.MAX_SAFE_INTEGER);
  const indices = new Array<number>(m).fill(0);
  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dp[i] = Math.min(dp[i], primes[j] * dp[indices[j]]);
    }
    for (let j = 0; j < m; j++) {
      if (dp[i] === primes[j] * dp[indices[j]]) {
        indices[j] += 1;
      }
    }
  }
  return dp[n - 1];
}
