/**
 * 1380. Lucky Numbers in a Matrix
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix
 */
export function luckyNumbers(matrix: number[][]): number[] {
  const [m, n] = [matrix.length, matrix[0].length];
  const minRows = new Array<number>(m).fill(Number.MAX_SAFE_INTEGER);
  const maxCols = new Array<number>(n).fill(Number.MIN_SAFE_INTEGER);
  matrix.forEach((rows, row) => {
    rows.forEach((num, col) => {
      minRows[row] = Math.min(minRows[row], num);
      maxCols[col] = Math.max(maxCols[col], num);
    });
  });

  const minRowSet = new Set(minRows);
  return maxCols.filter((num) => minRowSet.has(num));
}
