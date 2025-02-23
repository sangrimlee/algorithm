/**
 * 892. Surface Area of 3D Shapes
 * https://leetcode.com/problems/surface-area-of-3d-shapes
 */
export function surfaceArea(grid: number[][]): number {
  const n = grid.length;
  let area = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      area += 0 < grid[i][j] ? grid[i][j] * 4 + 2 : 0;
      area -= 0 < i ? Math.min(grid[i][j], grid[i - 1][j]) * 2 : 0;
      area -= 0 < j ? Math.min(grid[i][j], grid[i][j - 1]) * 2 : 0;
    }
  }
  return area;
}
