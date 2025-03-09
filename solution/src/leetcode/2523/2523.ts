/**
 * 2523. Closest Prime Numbers in Range
 * https://leetcode.com/problems/closest-prime-numbers-in-range/
 */
export function closestPrimes(left: number, right: number): number[] {
  const isPrime = sieve(right);

  let answer = [-1, -1];
  let prevPrime = -1;
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let num = left; num <= right; num++) {
    if (!isPrime[num]) continue;
    if (prevPrime !== -1 && num - prevPrime < minDiff) {
      minDiff = num - prevPrime;
      answer = [prevPrime, num];
    }
    prevPrime = num;
  }
  return answer;
}

function sieve(limit: number): boolean[] {
  const isPrime = new Array<boolean>(limit + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i * i <= limit; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j <= limit; j += i) {
      isPrime[j] = false;
    }
  }
  return isPrime;
}
