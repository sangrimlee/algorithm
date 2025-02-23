/**
 * 1190. Reverse Substrings Between Each Pair of Parentheses
 * https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses
 */
export function reverseParentheses(s: string): string {
  const stack = [''];
  for (const char of s) {
    if (char === '(') {
      stack.push('');
    } else if (char === ')') {
      const prev = stack.pop() ?? '';
      stack[stack.length - 1] += reverseString(prev);
    } else {
      stack[stack.length - 1] += char;
    }
  }

  return stack.join('');
}

function reverseString(s: string) {
  return s.split('').reverse().join('');
}
