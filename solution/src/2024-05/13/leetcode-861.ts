/**
 * 861. Score After Flipping Matrix
 * https://leetcode.com/problems/score-after-flipping-matrix
 */
export function matrixScore(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];

  let answer = (1 << (n - 1)) * m;
  for (let col = 1; col < n; col++) {
    let score = 0;
    for (let row = 0; row < m; row++) {
      score += grid[row][col] === grid[row][0] ? 1 : 0;
    }
    answer += Math.max(score, m - score) * (1 << (n - 1 - col));
  }
  return answer;
}
