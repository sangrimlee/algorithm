/**
 * 2544. Alternating Digit Sum
 * https://leetcode.com/problems/alternating-digit-sum
 */
export function alternateDigitSum(n: number): number {
  let sum = 0;
  let sign = 1;
  while (0 < n) {
    sign *= -1;
    sum += sign * (n % 10);
    n = Math.floor(n / 10);
  }
  return sign * sum;
}
