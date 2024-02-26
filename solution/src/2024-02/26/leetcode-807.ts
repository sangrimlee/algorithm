/**
 * 807. Max Increase to Keep City Skyline
 * https://leetcode.com/problems/max-increase-to-keep-city-skyline
 */
export function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const n = grid.length;
  const maxRow = new Array(n).fill(0);
  const maxCol = new Array(n).fill(0);

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      maxRow[row] = Math.max(maxRow[row], grid[row][col]);
      maxCol[col] = Math.max(maxCol[col], grid[row][col]);
    }
  }

  let answer = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      answer += Math.min(maxRow[row], maxCol[col]) - grid[row][col];
    }
  }
  return answer;
}
