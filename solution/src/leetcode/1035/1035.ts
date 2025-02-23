import { range } from '@algorithm/lib';

/**
 * 1035. Uncrossed Lines
 * https://leetcode.com/problems/uncrossed-lines
 */
export function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  const [m, n] = [nums1.length, nums2.length];
  const dp = Array.from({ length: m + 1 }).map(() => new Array<number>(n + 1).fill(0));

  for (const i of range(m)) {
    for (const j of range(n)) {
      if (nums1[i] === nums2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }

  return dp[m][n];
}
