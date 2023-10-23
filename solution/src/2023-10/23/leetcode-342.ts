/**
 * 342. Power of Four
 * https://leetcode.com/problems/power-of-four
 */
export function isPowerOfFour(n: number): boolean {
  while (1 < n) {
    if (n % 4 !== 0) {
      return false;
    }
    n /= 4;
  }
  return n === 1;
}
