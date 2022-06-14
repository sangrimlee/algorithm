/**
 * 583. Delete Operation for Two Strings
 * https://leetcode.com/problems/delete-operation-for-two-strings/
 */

export function minDistance(word1: string, word2: string): number {
  const [n, m] = [word1.length, word2.length];
  const dp = new Array(n + 1)
    .fill(undefined)
    .map(() => new Array(m + 1).fill(0));

  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (word1[i] === word2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
      maxLength = Math.max(maxLength, dp[i + 1][j + 1]);
    }
  }

  return n + m - 2 * maxLength;
}
