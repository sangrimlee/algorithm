/**
 * 2482. Difference Between Ones and Zeros in Row and Column
 * https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column
 */
export function onesMinusZeros(grid: number[][]): number[][] {
  const [m, n] = [grid.length, grid[0].length];
  const onesRow = new Array<number>(m).fill(0);
  const onesCol = new Array<number>(n).fill(0);
  grid.forEach((row, i) => {
    row.forEach((value, j) => {
      if (value === 1) {
        onesRow[i] += 1;
        onesCol[j] += 1;
      }
    });
  });

  const getDiff = (i: number, j: number) => {
    return 2 * (onesRow[i] + onesCol[j]) - (m + n);
  };

  return grid.map((row, i) => row.map((_, j) => getDiff(i, j)));
}
