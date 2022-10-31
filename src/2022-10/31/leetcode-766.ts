/**
 * 766. Toeplitz Matrix
 * https://leetcode.com/problems/toeplitz-matrix/
 */
export function isToeplitzMatrix(matrix: number[][]): boolean {
  const [n, m] = [matrix.length, matrix[0].length];
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (y < n - 1 && x < m - 1 && matrix[y][x] !== matrix[y + 1][x + 1]) {
        return false;
      }
    }
  }
  return true;
}
