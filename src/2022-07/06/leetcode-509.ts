/**
 * 509. Fibonacci Number
 * https://leetcode.com/problems/fibonacci-number/
 */
export function fib(n: number): number {
  if (n < 2) {
    return n;
  }
  const dp = new Array(n + 1).fill(undefined);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
