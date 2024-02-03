/**
 * 2133. Check if Every Row and Column Contains All Numbers
 * https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers
 */
export function checkValid(matrix: number[][]): boolean {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    const row = new Set<number>();
    const col = new Set<number>();
    for (let j = 0; j < n; j++) {
      if (row.has(matrix[i][j]) || col.has(matrix[j][i])) {
        return false;
      }
      row.add(matrix[i][j]);
      col.add(matrix[j][i]);
    }
  }

  return true;
}
