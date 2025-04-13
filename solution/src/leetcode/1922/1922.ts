/**
 * 1922. Count Good Numbers
 * https://leetcode.com/problems/count-good-numbers
 */
export function countGoodNumbers(n: number): number {
  const MOD = BigInt(10 ** 9 + 7);

  function pow(x: bigint, y: bigint): bigint {
    let result = 1n;
    let [base, exponent] = [x, y];
    while (exponent > 0) {
      if (exponent % 2n === 1n) {
        result = (result * base) % MOD;
      }
      base = (base * base) % MOD;
      exponent = exponent / 2n;
    }
    return result;
  }

  const even = BigInt(Math.floor((n + 1) / 2));
  const odd = BigInt(Math.floor(n / 2));
  return Number((pow(5n, even) * pow(4n, odd)) % MOD);
}
