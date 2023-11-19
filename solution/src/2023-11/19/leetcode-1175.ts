/**
 * 1175. Prime Arrangements
 * https://leetcode.com/problems/prime-arrangements
 */
export function numPrimeArrangements(n: number): number {
  const MOD = 10 ** 9 + 7;
  const isPrime = (n: number) => {
    if (n === 1) {
      return false;
    }
    for (let num = 2; num <= Math.sqrt(n); num++) {
      if (n % num === 0) {
        return false;
      }
    }
    return true;
  };

  let answer = 1;
  let [prime, nonPrime] = [0, 0];
  for (let num = 1; num <= n; num++) {
    if (isPrime(num)) {
      prime += 1;
      answer *= prime;
    } else {
      nonPrime += 1;
      answer *= nonPrime;
    }
    answer %= MOD;
  }

  return answer;
}
