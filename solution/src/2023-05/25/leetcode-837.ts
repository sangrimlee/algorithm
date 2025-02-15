import { range } from '@algorithm/lib';

/**
 * 837. New 21 Game
 * https://leetcode.com/problems/new-21-game
 */
export function new21Game(n: number, k: number, maxPts: number): number {
  const dp = new Array<number>(n + 1).fill(0);
  dp[0] = 1;

  for (const i of range(1, n + 1)) {
    for (const point of range(1, maxPts + 1)) {
      if (point <= i && i - point < k) {
        dp[i] += dp[i - point] / maxPts;
      }
    }
  }

  return dp.slice(k).reduce((acc, curr) => acc + curr, 0);
}
