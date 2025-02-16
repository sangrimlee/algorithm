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

  const memo = new Map<number, number>([[0, 1]]);

  const _pow = (x: number, n: number): number => {
    const memoValue = memo.get(n);
    if (memoValue !== undefined) {
      return memoValue;
    }
    if (n % 2 === 0) {
      const powValue = _pow(x, Math.floor(n / 2)) ** 2;
      memo.set(n, powValue);
      return powValue;
    } else {
      const powValue = _pow(x, Math.floor(n / 2)) ** 2 * x;
      memo.set(n, powValue);
      return powValue;
    }
  };

  return n < 0 ? _pow(1 / x, -n) : _pow(x, n);
}
