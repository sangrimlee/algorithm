import { range } from '@algorithm/lib';

/**
 * 2352. Equal Row and Column Pairs
 * https://leetcode.com/problems/equal-row-and-column-pairs
 */
export function equalPairs(grid: number[][]): number {
  const n = grid.length;

  const isEqualRowAndColumn = (row: number, col: number) => {
    for (const i of range(n)) {
      if (grid[row][i] !== grid[i][col]) {
        return false;
      }
    }
    return true;
  };

  let answer = 0;
  for (const row of range(n)) {
    for (const col of range(n)) {
      if (isEqualRowAndColumn(row, col)) {
        answer += 1;
      }
    }
  }
  return answer;
}
