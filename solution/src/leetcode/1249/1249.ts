/**
 * 1249. Minimum Remove to Make Valid Parentheses
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses
 */
export function minRemoveToMakeValid(s: string): string {
  const chars = s.split('');
  const stack: number[] = [];

  chars.forEach((char, i) => {
    if (char === '(') {
      stack.push(i);
    } else if (char === ')') {
      if (0 < stack.length) {
        stack.pop();
      } else {
        chars[i] = '';
      }
    }
  });

  while (0 < stack.length) {
    const i = stack.pop();
    if (i !== undefined) {
      chars[i] = '';
    }
  }

  return chars.join('');
}
