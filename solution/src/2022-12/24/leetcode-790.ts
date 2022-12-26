import { range } from '@1d1s/lib';

/**
 * 790. Domino and Tromino Tiling
 * https://leetcode.com/problems/domino-and-tromino-tiling
 */
export function numTilings(n: number): number {
  const MOD = 1e9 + 7;

  const dp = [0, 1, 2, 5].concat(new Array<number>(n).fill(0));

  for (const i of range(4, n + 1)) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % MOD;
  }

  return dp[n];
}
