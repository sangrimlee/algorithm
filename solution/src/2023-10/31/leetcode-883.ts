/**
 * 883. Projection Area of 3D Shapes
 * https://leetcode.com/problems/projection-area-of-3d-shapes
 */
export function projectionArea(grid: number[][]): number {
  const n = grid.length;
  let [xy, yz, xz] = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    let cyz = 0;
    let cxz = 0;
    for (let j = 0; j < n; j++) {
      xy += Math.min(1, grid[i][j]);
      cyz = Math.max(cyz, grid[i][j]);
      cxz = Math.max(cxz, grid[j][i]);
    }
    yz += cyz;
    xz += cxz;
  }

  return xy + yz + xz;
}
