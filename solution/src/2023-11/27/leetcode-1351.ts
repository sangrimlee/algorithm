/**
 * 1351. Count Negative Numbers in a Sorted Matrix
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix
 */
export function countNegatives(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];

  let answer = 0;
  let [row, col] = [0, n - 1];
  while (row < m && 0 <= col) {
    if (grid[row][col] < 0) {
      answer += m - row;
      col -= 1;
    } else {
      row += 1;
    }
  }
  return answer;
}
