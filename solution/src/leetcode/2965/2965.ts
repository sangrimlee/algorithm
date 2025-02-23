/**
 * 2965. Find Missing and Repeated Values
 * https://leetcode.com/problems/find-missing-and-repeated-values
 */
export function findMissingAndRepeatedValues(grid: number[][]): number[] {
  let sum = 0;
  let squareSum = 0;
  grid.forEach((row) => {
    row.forEach((num) => {
      sum += num;
      squareSum += num ** 2;
    });
  });

  const n = grid.length ** 2;
  const c1 = sum - (n * (n + 1)) / 2;
  const c2 = squareSum - (n * (n + 1) * (2 * n + 1)) / 6;
  return [(c2 / c1 + c1) / 2, (c2 / c1 - c1) / 2];
}
