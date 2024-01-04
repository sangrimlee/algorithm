/**
 * 1886. Determine Whether Matrix Can Be Obtained By Rotation
 * https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation
 */
export function findRotation(mat: number[][], target: number[][]): boolean {
  const n = mat.length;

  // Check 0, 90, 180, 270 Rotations
  const isRotated = new Array(4).fill(1);
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      // 0deg
      isRotated[0] &&= mat[y][x] === target[y][x];
      // 90deg
      isRotated[1] &&= mat[y][x] === target[n - x - 1][y];
      // 180deg
      isRotated[2] &&= mat[y][x] === target[n - y - 1][n - x - 1];
      // 270deg
      isRotated[3] &&= mat[y][x] === target[x][n - y - 1];
    }
  }

  return isRotated.some((v) => v);
}
