/**
 * 3239. Minimum Number of Flips to Make Binary Grid Palindromic I
 * https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i
 */
export function minFlips(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];

  let rowFlips = 0;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n / 2; x++) {
      if (grid[y][x] !== grid[y][n - 1 - x]) {
        rowFlips += 1;
      }
    }
  }

  let colFlips = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m / 2; y++) {
      if (grid[y][x] !== grid[m - 1 - y][x]) {
        colFlips += 1;
      }
    }
  }
  return Math.min(rowFlips, colFlips);
}
