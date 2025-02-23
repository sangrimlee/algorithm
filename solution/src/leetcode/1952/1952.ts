/**
 * 1952. Three Divisors
 * https://leetcode.com/problems/three-divisors
 */
export function isThree(n: number): boolean {
  function isSquare(n: number) {
    const sqrt = Math.floor(Math.sqrt(n));
    return sqrt ** 2 === n;
  }
  function isPrime(n: number) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  return 4 <= n && isSquare(n) && isPrime(Math.sqrt(n));
}
