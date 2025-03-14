/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/**
 * 2624. Snail Traversal
 * https://leetcode.com/problems/snail-traversal
 */
declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): T[][];
  }
}

Array.prototype.snail = function (rowsCount: number, colsCount: number) {
  if (this.length !== rowsCount * colsCount) {
    return [];
  }
  const arr = Array.from({ length: rowsCount }).map(() => new Array<number>(colsCount).fill(0));

  for (let col = 0; col < colsCount; col++) {
    for (let row = 0; row < rowsCount; row++) {
      if (col % 2 === 0) {
        arr[row][col] = this[col * rowsCount + row];
      } else {
        arr[rowsCount - row - 1][col] = this[col * rowsCount + row];
      }
    }
  }

  return arr;
};

export {};
