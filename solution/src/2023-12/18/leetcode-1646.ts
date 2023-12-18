/**
 * 1646. Get Maximum in Generated Array
 * https://leetcode.com/problems/get-maximum-in-generated-array
 */
export function getMaximumGenerated(n: number): number {
  if (n <= 1) {
    return n;
  }
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;

  let answer = 1;
  for (let i = 2; i <= n; i++) {
    const prevIndex = Math.floor(i / 2);
    dp[i] = i % 2 === 0 ? dp[prevIndex] : dp[prevIndex] + dp[prevIndex + 1];
    answer = Math.max(answer, dp[i]);
  }
  return answer;
}
