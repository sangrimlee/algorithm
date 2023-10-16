/**
 * 119. Pascal's Triangle II
 * https://leetcode.com/problems/pascals-triangle-ii
 */
export function getRow(rowIndex: number): number[] {
  let prevRow = [1];
  for (let row = 1; row <= rowIndex; row++) {
    prevRow = [1, ...prevRow.map((v, i) => v + (prevRow[i + 1] ?? 0))];
  }
  return prevRow;
}
