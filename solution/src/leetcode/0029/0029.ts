/**
 * 29. Divide Two Integers
 * https://leetcode.com/problems/divide-two-integers
 */
export function divide(dividend: number, divisor: number): number {
  const MAX_VALUE = 2 ** 31 - 1;
  const MIN_VALUE = -(2 ** 31);
  return Math.min(Math.max(Math.trunc(dividend / divisor), MIN_VALUE), MAX_VALUE);
}
