/**
 * 3033. Modify the Matrix
 * https://leetcode.com/problems/modify-the-matrix
 */
export function modifiedMatrix(matrix: number[][]): number[][] {
  const [m, n] = [matrix.length, matrix[0].length];
  const answer = Array.from({ length: m }, () => new Array<number>(n).fill(0));
  for (let col = 0; col < n; col++) {
    let maxValue = -1;
    for (let row = 0; row < m; row++) {
      maxValue = Math.max(maxValue, matrix[row][col]);
    }
    for (let row = 0; row < m; row++) {
      answer[row][col] = matrix[row][col] === -1 ? maxValue : matrix[row][col];
    }
  }
  return answer;
}
