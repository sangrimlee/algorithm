/**
 * 2965. Find Missing and Repeated Values
 * https://leetcode.com/problems/find-missing-and-repeated-values
 */
export function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const n = grid.length ** 2;
  const totalSum = (n * (n + 1)) / 2;
  const totalSquareSum = (n * (n + 1) * (2 * n + 1)) / 6;

  let actualSum = 0;
  let actualSquareSum = 0;
  for (const row of grid) {
    for (const value of row) {
      actualSum += value;
      actualSquareSum += value ** 2;
    }
  }

  const sumDiff = actualSum - totalSum;
  const squareDiff = actualSquareSum - totalSquareSum;
  const twiceValue = (squareDiff / sumDiff + sumDiff) / 2;
  const missingValue = (squareDiff / sumDiff - sumDiff) / 2;
  return [twiceValue, missingValue];
}
