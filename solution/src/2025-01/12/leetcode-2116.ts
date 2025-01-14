/**
 * 2116. Check if a Parentheses String Can Be Valid
 * https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid
 */
export function canBeValid(s: string, locked: string): boolean {
  return (
    s.length % 2 === 0 && validate(s, locked, '(') && validate(reverse(s), reverse(locked), ')')
  );
}

function reverse(s: string): string {
  let reversed = '';
  for (let i = s.length - 1; 0 <= i; i--) {
    reversed += s[i];
  }
  return reversed;
}

function validate(s: string, locked: string, open: string): boolean {
  let balanced = 0;
  let unlocked = 0;
  for (let i = 0; i < s.length; i++) {
    if (locked[i] === '1') {
      balanced += s[i] === open ? 1 : -1;
    } else {
      unlocked += 1;
    }
    if (balanced + unlocked < 0) {
      return false;
    }
  }
  return balanced <= unlocked;
}
