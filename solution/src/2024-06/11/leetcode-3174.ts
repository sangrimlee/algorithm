/**
 * 3174. Clear Digits
 * https://leetcode.com/problems/clear-digits
 */
export function clearDigits(s: string): string {
  const stack: string[] = [];
  for (const char of s) {
    if (/\d/.test(char)) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}
