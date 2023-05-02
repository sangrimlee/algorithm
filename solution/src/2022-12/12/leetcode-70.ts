import { range } from '@algorithm/lib';

/**
 * 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs
 *
 * Solution:
 * 다음 계단에 올라갈 수 있는 경우의 개수는
 * 1계단 전까지 올라온 경우의 수 + 2계단 전까지 올라온 경우의 수
 */
export function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }
  const dp = new Array<number>(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (const i of range(3, n + 1)) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
