/**
 * 326. Power of Three
 * https://leetcode.com/problems/power-of-three
 */
export function isPowerOfThree(n: number): boolean {
  const maxPowerOfThree = 3 ** 19;
  return 0 < n && maxPowerOfThree % n === 0;
}
