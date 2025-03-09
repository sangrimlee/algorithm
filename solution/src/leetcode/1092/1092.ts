/**
 * 1092. Shortest Common Supersequence
 * https://leetcode.com/problems/shortest-common-supersequence/
 */
export function shortestCommonSupersequence(str1: string, str2: string): string {
  const [m, n] = [str1.length, str2.length];
  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let [i, j] = [m, n];
  const supersequence: string[] = [];
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      supersequence.push(str1[i - 1]);
      i -= 1;
      j -= 1;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      supersequence.push(str1[i - 1]);
      i -= 1;
    } else {
      supersequence.push(str2[j - 1]);
      j -= 1;
    }
  }
  while (i > 0) {
    supersequence.push(str1[i - 1]);
    i -= 1;
  }
  while (j > 0) {
    supersequence.push(str2[j - 1]);
    j -= 1;
  }
  return supersequence.reverse().join('');
}
