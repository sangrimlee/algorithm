/**
 * 823. Binary Trees With Factors
 * https://leetcode.com/problems/binary-trees-with-factors
 */
export function numFactoredBinaryTrees(arr: number[]): number {
  arr.sort((a, b) => a - b);

  const MOD = 10 ** 9 + 7;
  const dp = new Map<number, number>();
  let answer = 0;
  for (const num of arr) {
    let total = 1;
    for (const [key, value] of dp.entries()) {
      if (num % key === 0) {
        const otherValue = dp.get(num / key) ?? 0;
        total = (total + value * otherValue) % MOD;
      }
    }
    dp.set(num, total);
    answer = (answer + total) % MOD;
  }
  return answer;
}
