/**
 * 1106. Parsing A Boolean Expression
 * https://leetcode.com/problems/parsing-a-boolean-expression
 */
export function parseBoolExpr(expression: string): boolean {
  const stack: string[] = [];
  for (const char of expression) {
    if (char === ')') {
      const exprs = new Set<string>();
      while (stack[stack.length - 1] !== '(') {
        exprs.add(stack.pop()!);
      }
      stack.pop();
      const operator = stack.pop()!;
      stack.push(evaluateExpr(exprs, operator) ? 't' : 'f');
    } else if (char !== ',') {
      stack.push(char);
    }
  }

  return stack.pop() === 't' ? true : false;
}

function evaluateExpr(exprs: Set<string>, operator: string) {
  if (operator === '&') {
    return [...exprs].every((e) => e === 't');
  }
  if (operator === '|') {
    return [...exprs].some((e) => e === 't');
  }
  return !exprs.has('t');
}
