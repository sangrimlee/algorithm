/**
 * 2579. Count Total Number of Colored Cells
 * https://leetcode.com/problems/count-total-number-of-colored-cells/
 */
export function coloredCells(n: number): number {
  return 2 * (n * (n - 1)) + 1;
}
