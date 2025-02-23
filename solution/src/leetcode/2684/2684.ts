/**
 * 2684. Maximum Number of Moves in a Grid
 * https://leetcode.com/problems/maximum-number-of-moves-in-a-grid
 */
export function maxMoves(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];

  let answer = 0;
  let prev = new Array<number>(m).fill(1);
  for (let col = 1; col < n; col++) {
    const curr = new Array<number>(m).fill(0);
    for (let row = 0; row < m; row++) {
      if (grid[row][col - 1] < grid[row][col] && 0 < prev[row]) {
        curr[row] = Math.max(curr[row], prev[row] + 1);
      }

      if (1 <= row && grid[row - 1][col - 1] < grid[row][col] && 0 < prev[row - 1]) {
        curr[row] = Math.max(curr[row], prev[row - 1] + 1);
      }

      if (row < m - 1 && grid[row + 1][col - 1] < grid[row][col] && 0 < prev[row + 1]) {
        curr[row] = Math.max(curr[row], prev[row + 1] + 1);
      }
      answer = Math.max(answer, curr[row] - 1);
    }
    prev = curr;
  }
  return answer;
}
