/**
 * 1014. Best Sightseeing Pair
 * https://leetcode.com/problems/best-sightseeing-pair
 */
export function maxScoreSightseeingPair(values: number[]): number {
  const n = values.length;
  const dp = new Array(n).fill(0);
  dp[0] = values[0];

  let answer = 0;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], values[i] + i);
    answer = Math.max(answer, dp[i - 1] + values[i] - i);
  }
  return answer;
}
