/**
 * 1837. Sum of Digits in Base K
 * https://leetcode.com/problems/sum-of-digits-in-base-k
 */
export function sumBase(n: number, k: number): number {
  let answer = 0;
  let current = n;
  while (0 < current) {
    answer += current % k;
    current = Math.floor(current / k);
  }
  return answer;
}
