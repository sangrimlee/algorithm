/**
 * 204. Count Primes
 * https://leetcode.com/problems/count-primes
 */
export function countPrimes(n: number): number {
  if (n <= 2) {
    return 0;
  }

  const isPrime = new Array(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  let answer = 0;
  for (let i = 2; i < n; i++) {
    if (!isPrime[i]) continue;
    answer += 1;
    for (let j = 2; i * j < n; j++) {
      isPrime[i * j] = false;
    }
  }
  return answer;
}
