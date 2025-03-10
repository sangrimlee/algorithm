import { range } from '@algorithm/lib';

/**
 * 72. Edit Distance
 * https://leetcode.com/problems/edit-distance
 */
export function minDistance(word1: string, word2: string): number {
  const [m, n] = [word1.length, word2.length];
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (const i of range(m + 1)) {
    dp[i][0] = i;
  }
  for (const j of range(n + 1)) {
    dp[0][j] = j;
  }

  for (const i of range(1, m + 1)) {
    for (const j of range(1, n + 1)) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}
