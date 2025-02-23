/**
 * 172. Factorial Trailing Zeroes
 * https://leetcode.com/problems/factorial-trailing-zeroes
 */
export function trailingZeroes(n: number): number {
  let answer = 0;
  for (let i = 5; 1 <= n / i; i *= 5) {
    answer += Math.floor(n / i);
  }
  return answer;
}
