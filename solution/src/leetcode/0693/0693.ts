/**
 * 693. Binary Number with Alternating Bits
 * https://leetcode.com/problems/binary-number-with-alternating-bits
 */
export function hasAlternatingBits(n: number): boolean {
  return /^(?:10)*1?$/.test(n.toString(2));
}
