/**
 * 2119. A Number After a Double Reversal
 * https://leetcode.com/problems/a-number-after-a-double-reversal
 */
export function isSameAfterReversals(num: number): boolean {
  return num === 0 || num % 10 !== 0;
}
