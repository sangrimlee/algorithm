/**
 * 1605. Find Valid Matrix Given Row and Column Sums
 * https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums
 */
export function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  const [m, n] = [rowSum.length, colSum.length];
  const answer = Array.from({ length: m }, () => new Array<number>(n).fill(0));
  let [row, col] = [0, 0];
  while (row < m && col < n) {
    const value = Math.min(rowSum[row], colSum[col]);
    answer[row][col] = value;
    rowSum[row] -= value;
    colSum[col] -= value;
    if (rowSum[row] === 0) {
      row += 1;
    }
    if (colSum[col] === 0) {
      col += 1;
    }
  }
  return answer;
}
