/**
 * 1975. Maximum Matrix Sum
 * https://leetcode.com/problems/maximum-matrix-sum
 */
export function maxMatrixSum(matrix: number[][]): number {
  let answer = 0;
  let negativeCount = 0;
  let minValue = Number.MAX_SAFE_INTEGER;
  matrix.forEach((row) => {
    row.forEach((value) => {
      negativeCount += value < 0 ? 1 : 0;
      answer += Math.abs(value);
      minValue = Math.min(minValue, Math.abs(value));
    });
  });
  return negativeCount % 2 === 0 ? answer : answer - 2 * minValue;
}
