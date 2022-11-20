/**
 * 224. Basic Calculator
 * https://leetcode.com/problems/basic-calculator/
 */
export function calculate(s: string): number {
  const isDigit = (char: string) => {
    return /^\d$/.test(char);
  };

  const isOp = (char: string) => {
    return /^[+-]$/.test(char);
  };

  const nums: number[] = [];
  const signs: number[] = [];
  let [result, num, sign] = [0, 0, 1];
  for (const char of s) {
    if (isDigit(char)) {
      num = num * 10 + parseInt(char);
    } else if (isOp(char)) {
      result += sign * num;
      [num, sign] = [0, char === '+' ? 1 : -1];
    } else if (char === '(') {
      nums.push(result);
      signs.push(sign);
      [result, sign] = [0, 1];
    } else if (char === ')') {
      result += sign * num;
      result *= signs.pop() || 1;
      result += nums.pop() || 0;
      num = 0;
    }
  }

  return result + sign * num;
}
