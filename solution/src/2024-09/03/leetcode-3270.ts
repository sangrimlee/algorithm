/**
 * 3270. Find the Key of the Numbers
 * https://leetcode.com/problems/find-the-key-of-the-numbers
 */
export function generateKey(num1: number, num2: number, num3: number): number {
  let answer = 0;
  let nums = [num1, num2, num3];
  for (let i = 0; i < 4; i++) {
    const minDigit = nums.reduce((prev, num) => Math.min(prev, num % 10), 10);
    answer += minDigit * 10 ** i;
    nums = nums.map((num) => Math.floor(num / 10));
  }
  return answer;
}