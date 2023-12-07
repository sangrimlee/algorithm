/**
 * 1903. Largest Odd Number in String
 * https://leetcode.com/problems/largest-odd-number-in-string
 */
export function largestOddNumber(num: string): string {
  const n = num.length;
  for (let i = n - 1; 0 <= i; i--) {
    if (+num[i] % 2 === 1) {
      return num.substring(0, i + 1);
    }
  }
  return '';
}
