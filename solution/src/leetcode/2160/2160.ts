/**
 * 2160. Minimum Sum of Four Digit Number After Splitting Digits
 * https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits
 */
export function minimumSum(num: number): number {
  const [a, b, c, d] = num
    .toString()
    .split('')
    .map(Number)
    .sort((a, b) => a - b);
  return 10 * (a + b) + c + d;
}
