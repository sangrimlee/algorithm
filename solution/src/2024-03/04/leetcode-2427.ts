/**
 * 2427. Number of Common Factors
 * https://leetcode.com/problems/number-of-common-factors
 */
export function commonFactors(a: number, b: number): number {
  function gcd(a: number, b: number): number {
    if (a === 0) {
      return b;
    }
    return gcd(b % a, a);
  }

  let answer = 1;
  const maxNum = gcd(a, b);
  for (let num = 2; num <= maxNum; num++) {
    if (a % num === 0 && b % num === 0) {
      answer += 1;
    }
  }

  return answer;
}
