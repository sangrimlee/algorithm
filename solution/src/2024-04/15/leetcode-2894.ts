/**
 * 2894. Divisible and Non-divisible Sums Difference
 * https://leetcode.com/problems/divisible-and-non-divisible-sums-difference
 */
export function differenceOfSums(n: number, m: number): number {
  let answer = 0;
  for (let num = 1; num <= n; num++) {
    answer += num % m !== 0 ? num : -num;
  }
  return answer;
}
