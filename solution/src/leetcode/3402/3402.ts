/**
 * 3402. Minimum Operations to Make Columns Strictly Increasing
 * https://leetcode.com/problems/minimum-operations-to-make-columns-strictly-increasing
 */
export function minimumOperations(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];

  let answer = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 1; y < m; y++) {
      if (grid[y - 1][x] < grid[y][x]) {
        continue;
      }
      answer += grid[y - 1][x] - grid[y][x] + 1;
      grid[y][x] = grid[y - 1][x] + 1;
    }
  }
  return answer;
}
