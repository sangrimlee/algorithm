/**
 * 1476. Subrectangle Queries
 * https://leetcode.com/problems/subrectangle-queries
 */
export class SubrectangleQueries {
  private readonly rectangle: number[][];

  constructor(rectangle: number[][]) {
    this.rectangle = rectangle;
  }

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number,
  ): void {
    for (let row = row1; row <= row2; row++) {
      for (let col = col1; col <= col2; col++) {
        this.rectangle[row][col] = newValue;
      }
    }
  }

  getValue(row: number, col: number): number {
    return this.rectangle[row][col];
  }
}
