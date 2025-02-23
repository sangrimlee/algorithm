/**
 * 463. Island Perimeter
 * https://leetcode.com/problems/island-perimeter
 */
export function islandPerimeter(grid: number[][]): number {
  const [row, col] = [grid.length, grid[0].length];

  let island = 0;
  let neighbor = 0;
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < col; x++) {
      if (grid[y][x] === 1) {
        island += 1;
        if (y < row - 1 && grid[y + 1][x] === 1) {
          neighbor += 1;
        }
        if (x < col - 1 && grid[y][x + 1] === 1) {
          neighbor += 1;
        }
      }
    }
  }

  return 4 * island - 2 * neighbor;
}
