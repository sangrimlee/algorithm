/**
 * 150. Evaluate Reverse Polish Notation
 * https://leetcode.com/problems/evaluate-reverse-polish-notation
 */
export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const token of tokens) {
    if (isNumber(token)) {
      stack.push(parseInt(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(evalute(a, b, token));
    }
  }

  return stack[0];
}

function isNumber(token: string) {
  return /^-*\d+$/.test(token);
}

function evalute(a: number | undefined, b: number | undefined, op: string) {
  if (a === undefined || b === undefined) {
    return 0;
  }
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;

    case '*':
      return a * b;
    case '/':
      return Math.trunc(a / b);
  }
  return 0;
}
