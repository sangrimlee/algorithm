/**
 * 2028. Find Missing Observations
 * https://leetcode.com/problems/find-missing-observations
 */
export function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const m = rolls.length;
  const totalValue = mean * (n + m);
  const remainValue = totalValue - rolls.reduce((acc, roll) => acc + roll, 0);

  if (remainValue < n || 6 * n < remainValue) {
    return [];
  }

  const [quotient, remainder] = [Math.floor(remainValue / n), remainValue % n];
  return Array.from({ length: n }, (_, i) => (i < remainder ? quotient + 1 : quotient));
}
