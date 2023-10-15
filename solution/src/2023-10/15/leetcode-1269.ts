/**
 * 1269. Number of Ways to Stay in the Same Place After Some Steps
 * https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps
 */
export function numWays(steps: number, arrLen: number): number {
  if (steps < 2 || arrLen < 1) {
    return 1;
  }

  const MOD = 10 ** 9 + 7;
  const minLen = Math.min(arrLen, steps);
  const dp = new Array<number>(minLen + 1).fill(0);
  dp[0] = 1;
  for (let step = steps; 0 < step; step--) {
    let prevWays = 0;
    for (let i = 0; i < minLen; i++) {
      const currWays = dp[i];
      dp[i] = (prevWays + dp[i] + dp[i + 1]) % MOD;
      prevWays = currWays;
    }
  }
  return dp[0];
}
