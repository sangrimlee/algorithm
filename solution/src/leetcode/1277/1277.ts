/**
 * 1277. Count Square Submatrices with All Ones
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones
 */
export function countSquares(matrix: number[][]): number {
  const [m, n] = [matrix.length, matrix[0].length];

  let answer = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1 && 0 < i && 0 < j) {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) + 1;
      }
      answer += matrix[i][j];
    }
  }
  return answer;
}
