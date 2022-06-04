/**
 * 51. N-Queens
 * https://leetcode.com/problems/n-queens/
 */

export function solveNQueens(n: number): string[][] {
  const result: string[][] = [];
  const stack: number[] = [];

  function createRow(index: number) {
    const row = new Array(n).fill('.');
    row[index] = 'Q';
    return row.join('');
  }

  function isPossible(col: number, row: number, index: number) {
    return !(col === index || stack.length - row === Math.abs(col - index));
  }

  function backtracking(): void {
    if (stack.length === n) {
      result.push(stack.map(createRow));
      return;
    }
    for (let i = 0; i < n; i++) {
      if (stack.every((row, col) => isPossible(row, col, i))) {
        stack.push(i);
        backtracking();
        stack.pop();
      }
    }
    return;
  }

  backtracking();
  return result;
}
