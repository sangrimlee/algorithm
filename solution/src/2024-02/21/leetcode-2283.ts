/**
 * 2283. Check if Number Has Equal Digit Count and Digit Value
 * https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value
 */
export function digitCount(num: string): boolean {
  const counts = new Array(10).fill(0);
  for (const digit of num) {
    counts[+digit] += 1;
  }
  for (let i = 0; i < num.length; i++) {
    if (counts[i] !== +num[i]) {
      return false;
    }
  }
  return true;
}
