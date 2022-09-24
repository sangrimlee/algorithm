/**
 * 1680. Concatenation of Consecutive Binary Numbers
 * https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/
 */
export function concatenatedBinary(n: number): number {
  let answer = 1;
  const MOD = 10 ** 9 + 7;
  for (let i = 2; i <= n; i++) {
    const binaryString = i.toString(2);
    answer = (answer * 2 ** binaryString.length + i) % MOD;
  }
  return answer;
}
