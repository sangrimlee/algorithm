/**
 * 304. Range Sum Query 2D - Immutable
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 */

export class NumMatrix {
  m: number;
  n: number;
  sumMatrix: number[][];

  constructor(matrix: number[][]) {
    this.m = matrix.length;
    this.n = matrix[0].length;
    this.sumMatrix = Array.from({ length: this.m + 1 }).map(() =>
      new Array<number>(this.n + 1).fill(0),
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
