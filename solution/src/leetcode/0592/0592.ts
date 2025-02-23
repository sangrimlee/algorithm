/**
 * 592. Fraction Addition and Subtraction
 * https://leetcode.com/problems/fraction-addition-and-subtraction
 */
export function fractionAddition(expression: string): string {
  const nums = [...expression.matchAll(/[+-]?\d+/g)].map((v) => +v);

  let [numerator, denominator] = [0, 1];
  for (let i = 0; i < nums.length; i += 2) {
    const [num, den] = [nums[i], nums[i + 1]];
    numerator = numerator * den + denominator * num;
    denominator *= den;

    const gcdValue = gcd(Math.abs(numerator), denominator);
    numerator /= gcdValue;
    denominator /= gcdValue;
  }
  return `${numerator.toString()}/${denominator.toString()}`;
}

function gcd(a: number, b: number): number {
  while (0 < b) {
    [a, b] = [b, a % b];
  }
  return a;
}
