/**
 * 3195. Find the Minimum Area to Cover All Ones I
 * https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i
 */
export function minimumArea(grid: number[][]): number {
  let [minRow, maxRow] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  let [minCol, maxCol] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  grid.forEach((arr, row) => {
    arr.forEach((value, col) => {
      if (value !== 1) return;
      minRow = Math.min(minRow, row);
      maxRow = Math.max(maxRow, row);
      minCol = Math.min(minCol, col);
      maxCol = Math.max(maxCol, col);
    });
  });
  return (maxRow - minRow + 1) * (maxCol - minCol + 1);
}
