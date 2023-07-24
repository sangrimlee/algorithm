/**
 * 50. Pow(x, n)
 * https://leetcode.com/problems/powx-n
 */
export function myPow(x: number, n: number): number {
  /**
   *
   * return x ** n;
   * return Math.pow(x, n);
   */

  const memo: Record<number, number> = { 0: 1 };

  const _pow = (x: number, n: number): number => {
    if (memo[n] !== undefined) {
      return memo[n];
    }
    if (n % 2 === 0) {
      memo[n] = _pow(x, Math.floor(n / 2)) ** 2;
      return memo[n];
    } else {
      memo[n] = _pow(x, Math.floor(n / 2)) ** 2 * x;
      return memo[n];
    }
  };

  return n < 0 ? _pow(1 / x, -n) : _pow(x, n);
}
