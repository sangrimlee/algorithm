import { range } from '@1d1s/lib';

/**
 * 1143. Longest Common Subsequence
 * https://leetcode.com/problems/longest-common-subsequence
 */
export function longestCommonSubsequence(text1: string, text2: string): number {
  const [n, m] = [text1.length, text2.length];
  const dp = new Array(n + 1).fill(undefined).map(() => new Array<number>(m + 1).fill(0));

  for (const i of range(1, n + 1)) {
    for (const j of range(1, m + 1)) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n][m];
}
