/**
 * 2319. Check if Matrix Is X-Matrix
 * https://leetcode.com/problems/check-if-matrix-is-x-matrix
 */
export function checkXMatrix(grid: number[][]): boolean {
  const [m, n] = [grid.length, grid[0].length];

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const value = grid[row][col];
      const isDiagonal = row === col || row + col === m - 1;
      if (isDiagonal && value === 0) {
        return false;
      }
      if (!isDiagonal && value > 0) {
        return false;
      }
    }
  }

  return true;
}
