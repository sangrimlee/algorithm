/**
 * 118. Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle
 */
export function generate(numRows: number): number[][] {
  const triangle = new Array(numRows).fill(null).map((_, i) => new Array(i + 1).fill(1));
  for (let row = 2; row < numRows; row++) {
    for (let col = 1; col < row; col++) {
      triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
    }
  }
  return triangle;
}
