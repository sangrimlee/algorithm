/**
 * 1544. Make The String Great
 * https://leetcode.com/problems/make-the-string-great/
 */
export function makeGood(s: string): string {
  const stack: string[] = [];
  for (const char of s) {
    const top = stack[stack.length - 1];
    if (top === switchCase(char)) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}

const isLowerCase = (char: string) => /^[a-z]$/.test(char);

const switchCase = (char: string) =>
  isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();
