/**
 * 48. Rotate Image
 * https://leetcode.com/problems/rotate-image
 */
/** Do not return anything, modify matrix in-place instead. */
export function rotate(matrix: number[][]): void {
  const [m, n] = [matrix.length, matrix[0].length];

  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < m; i++) {
    matrix[i].reverse();
  }
}
