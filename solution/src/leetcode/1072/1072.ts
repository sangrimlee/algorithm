/**
 * 1072. Flip Columns For Maximum Number of Equal Rows
 * https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows
 */
export function maxEqualRowsAfterFlips(matrix: number[][]): number {
  const counter = new Map<string, number>();
  for (const row of matrix) {
    const pattern = row.reduce((prev, value) => prev + (value === row[0] ? '0' : '1'), '');
    counter.set(pattern, (counter.get(pattern) ?? 0) + 1);
  }

  return [...counter.values()].reduce((prev, count) => Math.max(prev, count), 0);
}
