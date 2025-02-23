/**
 * 2520. Count the Digits That Divide a Number
 * https://leetcode.com/problems/count-the-digits-that-divide-a-number/
 */
export function countDigits(num: number): number {
  let answer = 0;
  let current = num;
  while (0 < current) {
    const value = current % 10;
    if (num % value === 0) {
      answer += 1;
    }
    current = Math.floor(current / 10);
  }
  return answer;
}
