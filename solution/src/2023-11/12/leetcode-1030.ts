/**
 * 1030. Matrix Cells in Distance Order
 * https://leetcode.com/problems/matrix-cells-in-distance-order
 */
export function allCellsDistOrder(
  rows: number,
  cols: number,
  rCenter: number,
  cCenter: number,
): number[][] {
  const distance = ([row, col]: number[]) => {
    return Math.abs(row - rCenter) + Math.abs(col - cCenter);
  };

  return new Array(rows * cols)
    .fill(undefined)
    .map((_, i) => [Math.floor(i / cols), i % cols])
    .sort((a, b) => distance(a) - distance(b));
}
