import { range } from '@1d1s/lib';

/**
 * 931. Minimum Falling Path Sum
 * https://leetcode.com/problems/minimum-falling-path-sum
 */
export function minFallingPathSum(matrix: number[][]): number {
  const maxSize = Number.MAX_SAFE_INTEGER;
  const n = matrix.length;
  const dp = new Array(n).fill(undefined).map(() => new Array<number>(n).fill(maxSize));
  dp[0] = matrix[0];

  for (const row of range(1, n)) {
    for (const col of range(n)) {
      const prevMinValue = Math.min(
        dp[row - 1][col - 1] ?? maxSize,
        dp[row - 1][col],
        dp[row - 1][col + 1] ?? maxSize,
      );
      dp[row][col] = matrix[row][col] + prevMinValue;
    }
  }

  const answer = Math.min(...dp[n - 1]);
  return answer;
}
