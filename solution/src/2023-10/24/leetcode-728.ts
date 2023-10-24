import { range } from '@algorithm/lib';

/**
 * 728. Self Dividing Numbers
 * https://leetcode.com/problems/self-dividing-numbers
 */
export function selfDividingNumbers(left: number, right: number): number[] {
  const isDivisible = (num: number) =>
    [...num.toString()].every((digit) => num % parseInt(digit) === 0);
  return [...range(left, right + 1)].filter(isDivisible);
}
