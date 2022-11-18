/**
 * 263. Ugly Number
 * https://leetcode.com/problems/ugly-number/
 */
export function isUgly(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  const divideUntilDivisible = (dividend: number, divisor: number): number => {
    while (dividend % divisor === 0) {
      dividend /= divisor;
    }
    return dividend;
  };

  const factors = [2, 3, 5];
  const num = factors.reduce(divideUntilDivisible, n);
  return num === 1;
}
