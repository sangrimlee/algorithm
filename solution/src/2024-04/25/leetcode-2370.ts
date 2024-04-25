/**
 * 2370. Longest Ideal Subsequence
 * https://leetcode.com/problems/longest-ideal-subsequence
 */
export function longestIdealString(s: string, k: number): number {
  const aCharCode = 'a'.charCodeAt(0);

  let answer = 0;
  const dp = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i) - aCharCode;
    const startCode = Math.max(charCode - k, 0);
    const endCode = Math.min(charCode + k, 25);

    for (let code = startCode; code <= endCode; code++) {
      dp[charCode] = Math.max(dp[charCode], dp[code]);
    }
    dp[charCode] += 1;
    answer = Math.max(answer, dp[charCode]);
  }
  return answer;
}
