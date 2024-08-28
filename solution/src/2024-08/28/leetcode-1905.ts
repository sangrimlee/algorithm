/**
 * 1905. Count Sub Islands
 * https://leetcode.com/problems/count-sub-islands
 */
export function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const [m, n] = [grid1.length, grid1[0].length];
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (grid1[y][x] === 0 && grid2[y][x] === 1) {
        findSubIslands(grid2, y, x);
      }
    }
  }

  let answer = 0;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (grid2[y][x] === 1) {
        findSubIslands(grid2, y, x);
        answer += 1;
      }
    }
  }
  return answer;
}

function findSubIslands(grid: number[][], y: number, x: number): void {
  if (y < 0 || grid.length <= y || x < 0 || grid[0].length <= x || grid[y][x] === 0) {
    return;
  }
  grid[y][x] = 0;
  findSubIslands(grid, y + 1, x);
  findSubIslands(grid, y - 1, x);
  findSubIslands(grid, y, x + 1);
  findSubIslands(grid, y, x - 1);
}
