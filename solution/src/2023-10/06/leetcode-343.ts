/**
 * 343. Integer Break
 * https://leetcode.com/problems/integer-break
 */
export function integerBreak(n: number): number {
  if (n <= 3) {
    return n - 1;
  }
  const share = Math.floor(n / 3);
  if (n % 3 === 1) {
    return 3 ** (share - 1) * 4;
  }
  if (n % 3 === 2) {
    return 3 ** share * 2;
  }
  return 3 ** share;
}
