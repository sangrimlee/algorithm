/**
 * 2033. Minimum Operations to Make a Uni-Value Grid
 * https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid
 */
export function minOperations(grid: number[][], x: number): number {
  const values = grid.flat().sort((a, b) => a - b);
  const midValue = values[Math.floor(values.length / 2)];

  let operations = 0;
  for (const value of values) {
    const diff = Math.abs(midValue - value);
    if (diff % x !== 0) {
      return -1;
    }
    operations += diff / x;
  }
  return operations;
}
