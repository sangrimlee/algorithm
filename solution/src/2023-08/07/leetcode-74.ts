/**
 * 74. Search a 2D Matrix
 * https://leetcode.com/problems/search-a-2d-matrix
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  for (const row of matrix) {
    if (target <= row[row.length - 1]) {
      return row.indexOf(target) !== -1;
    }
  }
  return false;
}
