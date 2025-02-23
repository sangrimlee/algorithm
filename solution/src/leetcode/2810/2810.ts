/**
 * 2810. Faulty Keyboard
 * https://leetcode.com/problems/faulty-keyboard
 */
export function finalString(s: string): string {
  const chars: string[] = [];
  for (const char of s) {
    if (char === 'i') {
      chars.reverse();
    } else {
      chars.push(char);
    }
  }
  return chars.join('');
}
