/**
 * 405. Convert a Number to Hexadecimal
 * https://leetcode.com/problems/convert-a-number-to-hexadecimal
 */
export function toHex(num: number): string {
  if (num === 0) {
    return '0';
  }

  const digits = '0123456789abcdef';

  let hex = '';
  let n = num >>> 0;
  while (0 < n) {
    hex = digits[n % 16] + hex;
    n = Math.floor(n / 16);
  }

  return hex;
}
