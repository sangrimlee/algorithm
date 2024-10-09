/**
 * 537. Complex Number Multiplication
 * https://leetcode.com/problems/complex-number-multiplication
 */
export function complexNumberMultiply(num1: string, num2: string): string {
  const [a, b] = parseComplexNumber(num1);
  const [c, d] = parseComplexNumber(num2);
  return `${a * c - b * d}+${a * d + b * c}i`;
}

function parseComplexNumber(num: string) {
  return num
    .slice(0, -1)
    .split('+')
    .map((v) => +v);
}
