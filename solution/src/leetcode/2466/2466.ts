import { range } from '@algorithm/lib';

/**
 * 2466. Count Ways To Build Good Strings
 * https://leetcode.com/problems/count-ways-to-build-good-strings
 */
export function countGoodStrings(low: number, high: number, zero: number, one: number): number {
  const MOD = 10 ** 9 + 7;
  const dp = new Array<number>(high + 1).fill(0);
  dp[0] = 1;

  let answer = 0;
  for (const i of range(1, high + 1)) {
    if (zero <= i) {
      dp[i] += dp[i - zero];
    }
    if (one <= i) {
      dp[i] += dp[i - one];
    }
    dp[i] %= MOD;
    if (low <= i && i <= high) {
      answer += dp[i];
      answer %= MOD;
    }
  }

  return answer;
}
