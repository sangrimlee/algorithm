/**
 * 1572. Matrix Diagonal Sum
 * https://leetcode.com/problems/matrix-diagonal-sum
 */
export function diagonalSum(mat: number[][]): number {
  const n = mat.length;

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (i === n - i - 1) {
      result += mat[i][i];
    } else {
      result += mat[i][i] + mat[i][n - i - 1];
    }
  }

  return result;
}
