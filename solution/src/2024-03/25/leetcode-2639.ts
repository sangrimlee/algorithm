/**
 * 2639. Find the Width of Columns of a Grid
 * https://leetcode.com/problems/find-the-width-of-columns-of-a-grid
 */
export function findColumnWidth(grid: number[][]): number[] {
  const [m, n] = [grid.length, grid[0].length];

  const answer: number[] = [];
  for (let col = 0; col < n; col++) {
    let maxWidth = 0;
    for (let row = 0; row < m; row++) {
      const width = grid[row][col].toString().length;
      maxWidth = Math.max(maxWidth, width);
    }
    answer.push(maxWidth);
  }
  return answer;
}
