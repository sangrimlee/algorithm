/**
 * 1304. Find N Unique Integers Sum up to Zero
 * https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero
 */
export function sumZero(n: number): number[] {
  const answer = n % 2 === 0 ? [] : [0];
  for (let num = 1; num <= Math.floor(n / 2); num++) {
    answer.push(num, -num);
  }
  return answer;
}
