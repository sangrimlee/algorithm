/**
 * 304. Range Sum Query 2D - Immutable
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 */

class NumMatrix {
  m: number;
  n: number;
  sumMatrix: number[][];

  constructor(matrix: number[][]) {
    this.m = matrix.length;
    this.n = matrix[0].length;
    this.sumMatrix = Array.from({ length: this.m + 1 }).map(() =>
      new Array(this.n + 1).fill(0)
    );
    matrix.forEach((row, rowIndex) => {
      row.forEach((num, colIndex) => {
        this.sumMatrix[rowIndex + 1][colIndex + 1] =
          num +
          this.sumMatrix[rowIndex + 1][colIndex] +
          this.sumMatrix[rowIndex][colIndex + 1] -
          this.sumMatrix[rowIndex][colIndex];
      });
    });
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.sumMatrix[row2 + 1][col2 + 1] -
      this.sumMatrix[row2 + 1][col1] -
      this.sumMatrix[row1][col2 + 1] +
      this.sumMatrix[row1][col1]
    );
  }
}

const numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
console.log(numMatrix.sumRegion(2, 1, 4, 3));
console.log(numMatrix.sumRegion(1, 1, 2, 2));
console.log(numMatrix.sumRegion(1, 2, 2, 4));
console.log(numMatrix.sumRegion(0, 0, 0, 0));
