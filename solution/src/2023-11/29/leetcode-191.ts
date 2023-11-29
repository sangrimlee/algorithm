/**
 * 191. Number of 1 Bits
 * https://leetcode.com/problems/number-of-1-bits
 */
export function hammingWeight(n: number): number {
  let bitCount = 0;
  while (n !== 0) {
    n &= n - 1;
    bitCount += 1;
  }
  return bitCount;
}
