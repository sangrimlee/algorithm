/**
 * 201. Bitwise AND of Numbers Range
 * https://leetcode.com/problems/bitwise-and-of-numbers-range
 */
export function rangeBitwiseAnd(left: number, right: number): number {
  let shift = 0;
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift += 1;
  }
  return left << shift;
}
