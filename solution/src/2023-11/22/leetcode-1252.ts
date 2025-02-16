/**
 * 1252. Cells with Odd Values in a Matrix
 * https://leetcode.com/problems/cells-with-odd-values-in-a-matrix
 */
export function oddCells(m: number, n: number, indices: number[][]): number {
  const rows = new Array<number>(m).fill(0);
  const cols = new Array<number>(n).fill(0);
  for (const [r, c] of indices) {
    rows[r] += 1;
    cols[c] += 1;
  }

  let answer = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if ((rows[r] + cols[c]) % 2 === 1) {
        answer += 1;
      }
    }
  }
  return answer;
}
