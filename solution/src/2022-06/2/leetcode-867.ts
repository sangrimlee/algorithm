/**
 * 867. Transpose Matrix
 * https://leetcode.com/problems/transpose-matrix/
 */
export function transpose(matrix: number[][]): number[][] {
  const [m, n] = [matrix.length, matrix[0].length];
  const result = Array.from({ length: n }).map(() => new Array<number>(m).fill(-1));

  matrix.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      result[colIndex][rowIndex] = value;
    });
  });

  return result;
}
