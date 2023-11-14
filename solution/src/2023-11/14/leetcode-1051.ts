/**
 * 1051. Height Checker
 * https://leetcode.com/problems/height-checker
 */
export function heightChecker(heights: number[]): number {
  const expected = [...heights].sort((a, b) => a - b);
  return heights.filter((height, i) => height !== expected[i]).length;
}
