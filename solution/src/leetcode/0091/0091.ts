/**
 * 91. Decode Ways
 * https://leetcode.com/problems/decode-ways/
 */
export function numDecodings(s: string): number {
  if (s === '') {
    return 0;
  }

  const N = s.length;
  const dp = new Array<number>(N + 1).fill(0);
  dp[0] = 1;
  dp[1] = !s.startsWith('0') ? 1 : 0;

  for (let i = 2; i <= N; i++) {
    const oneDigit = parseInt(s[i - 1]);
    const twoDigit = parseInt(s[i - 2] + s[i - 1]);
    if (oneDigit !== 0) {
      dp[i] += dp[i - 1];
    }
    if (10 <= twoDigit && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[N];
}
