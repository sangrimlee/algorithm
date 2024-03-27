/**
 * 2652. Sum Multiples
 * https://leetcode.com/problems/sum-multiples
 */
export function sumOfMultiples(n: number): number {
  function isDivisible(num: number) {
    return num % 3 === 0 || num % 5 === 0 || num % 7 === 0;
  }

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (isDivisible(i)) {
      answer += i;
    }
  }
  return answer;
}
