/**
 * 504. Base 7
 * https://leetcode.com/problems/base-7
 */
export function convertToBase7(num: number): string {
  // return num.toString(7);
  if (num === 0) {
    return '0';
  }

  let n = Math.abs(num);
  let base7 = '';
  while (0 < n) {
    base7 = `${n % 7}${base7}`;
    n = Math.floor(n / 7);
  }
  return num < 0 ? `-${base7}` : base7;
}
