/**
 * 2303. Calculate Amount Paid in Taxes
 * https://leetcode.com/problems/calculate-amount-paid-in-taxes
 */
export function calculateTax(brackets: number[][], income: number): number {
  let answer = 0;
  let current = 0;
  for (const [upper, percent] of brackets) {
    const earned = Math.min(upper, income) - current;
    answer += (earned * percent) / 100;
    current += earned;
  }
  return answer;
}
