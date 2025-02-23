/**
 * 227. Basic Calculator II
 * https://leetcode.com/problems/basic-calculator-ii
 */
export function calculate(s: string): number {
  function isDigit(char: string) {
    return /^[0-9]$/.test(char);
  }
  function isSign(char: string) {
    return /^[+*/-]$/.test(char);
  }

  const n = s.length;
  const stack: number[] = [];
  let num = 0;
  let sign = '+';
  for (let i = 0; i < n; i++) {
    const char = s[i];
    if (isDigit(char)) {
      num = 10 * num + parseInt(char);
    }
    if (isSign(char) || i === n - 1) {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(-num);
      } else if (sign === '*') {
        stack.push((stack.pop() ?? 0) * num);
      } else {
        stack.push(Math.trunc((stack.pop() ?? 0) / num));
      }
      num = 0;
      sign = char;
    }
  }

  return stack.reduce((acc, num) => acc + num, 0);
}
