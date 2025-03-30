/* eslint-disable @typescript-eslint/no-non-null-assertion */
const MOD = 10 ** 9 + 7;

/**
 * 2818. Apply Operations to Maximize Score
 * https://leetcode.com/problems/apply-operations-to-maximize-score
 */
export function maximumScore(nums: number[], k: number): number {
  const n = nums.length;
  const maxNum = nums.reduce((prev, num) => Math.max(prev, num), 0);
  const primes = findPrimes(maxNum);
  const primeScores = nums.map((num) => getPrimeScore(num, primes));
  const nextDominant = new Array<number>(n).fill(n);
  const prevDominant = new Array<number>(n).fill(-1);

  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (0 < stack.length && primeScores[stack[stack.length - 1]] < primeScores[i]) {
      const topIndex = stack.pop()!;
      nextDominant[topIndex] = i;
    }
    if (0 < stack.length) {
      prevDominant[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }

  const numOfSubarrays = new Array<number>(n).fill(0);
  for (let i = 0; i < n; i++) {
    numOfSubarrays[i] = (nextDominant[i] - i) * (i - prevDominant[i]);
  }

  const sortedNums = nums.map((num, i) => [num, i]).sort((a, b) => b[0] - a[0]);
  let score = 1;
  let currentIndex = 0;
  let remainOperations = k;
  while (remainOperations > 0) {
    const [num, i] = sortedNums[currentIndex];
    currentIndex += 1;
    const operations = Math.min(remainOperations, numOfSubarrays[i]);
    score = multiply(score, power(num, operations));
    remainOperations -= operations;
  }
  return score;
}

function findPrimes(limit: number): number[] {
  const primes: number[] = [];
  const isPrime = new Array<boolean>(limit + 1).fill(true);
  for (let num = 2; num <= limit; num++) {
    if (!isPrime[num]) {
      continue;
    }
    primes.push(num);
    for (let mul = num * num; mul <= limit; mul += num) {
      isPrime[mul] = false;
    }
  }
  return primes;
}

function getPrimeScore(num: number, primes: number[]): number {
  let primeScore = 0;
  for (const prime of primes) {
    if (num < prime * prime) {
      break;
    }
    if (num % prime !== 0) {
      continue;
    }
    primeScore += 1;
    while (num % prime === 0) {
      num /= prime;
    }
  }
  return num > 1 ? primeScore + 1 : primeScore;
}

function multiply(num1: number, num2: number): number {
  return Number((BigInt(num1) * BigInt(num2)) % BigInt(MOD));
}

function power(base: number, exponent: number): number {
  let result = 1;
  while (exponent > 0) {
    if (exponent % 2 !== 0) {
      result = multiply(result, base);
    }
    base = multiply(base, base);
    exponent = Math.floor(exponent / 2);
  }
  return result % MOD;
}
