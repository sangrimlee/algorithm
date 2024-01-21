/**
 * 166. Fraction to Recurring Decimal
 * https://leetcode.com/problems/fraction-to-recurring-decimal
 */
export function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator === 0) {
    return '0';
  }

  const answer: string[] = [];
  if (Math.sign(numerator) !== Math.sign(denominator)) {
    answer.push('-');
  }

  const [n, d] = [Math.abs(numerator), Math.abs(denominator)];

  let r = n % d;
  answer.push(Math.floor(n / d).toString());

  if (r === 0) {
    return answer.join('');
  }
  answer.push('.');

  const remains = new Map<number, number>();
  remains.set(r, answer.length);
  while (0 < r) {
    answer.push(Math.floor((10 * r) / d).toString());
    r = (10 * r) % d;

    if (!remains.has(r)) {
      remains.set(r, answer.length);
    } else {
      const startIndex = remains.get(r)!;
      answer.splice(startIndex, 0, '(');
      answer.push(')');
      return answer.join('');
    }
  }

  return answer.join('');
}
