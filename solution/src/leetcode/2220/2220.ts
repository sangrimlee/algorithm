/**
 * 2220. Minimum Bit Flips to Convert Number
 * https://leetcode.com/problems/minimum-bit-flips-to-convert-number
 */
export function minBitFlips(start: number, goal: number): number {
  const xor = start ^ goal;
  return xor.toString(2).replace(/0/g, '').length;
}
