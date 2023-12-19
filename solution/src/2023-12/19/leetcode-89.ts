/**
 * 89. Gray Code
 * https://leetcode.com/problems/gray-code
 */
export function grayCode(n: number): number[] {
  return new Array(1 << n).fill(0).map((_, i) => i ^ (i >> 1));
}
