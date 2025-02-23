/**
 * 2864. Maximum Odd Binary Number
 * https://leetcode.com/problems/maximum-odd-binary-number
 */
export function maximumOddBinaryNumber(s: string): string {
  const n = s.length;

  let bitCount = 0;
  for (const char of s) {
    if (char === '1') {
      bitCount += 1;
    }
  }
  return '1'.repeat(bitCount - 1) + '0'.repeat(n - bitCount) + '1';
}
