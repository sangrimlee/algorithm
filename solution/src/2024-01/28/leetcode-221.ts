/**
 * 221. Maximal Square
 * https://leetcode.com/problems/maximal-square
 */
export function maximalSquare(matrix: string[][]): number {
  const [m, n] = [matrix.length, matrix[0].length];
  const dp = Array.from({ length: m + 1 }).map(() => new Array(n + 1).fill(0));

  let answer = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === '0') continue;
      dp[row + 1][col + 1] = Math.min(dp[row][col], dp[row + 1][col], dp[row][col + 1]) + 1;
      answer = Math.max(answer, dp[row + 1][col + 1] ** 2);
    }
  }

  return answer;
}
