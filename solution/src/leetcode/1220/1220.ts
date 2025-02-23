/**
 * 1220. Count Vowels Permutation
 * https://leetcode.com/problems/count-vowels-permutation
 */
export function countVowelPermutation(n: number): number {
  const MOD = 10 ** 9 + 7;

  let [a, e, i, o, u] = [1, 1, 1, 1, 1];
  for (let j = 1; j < n; j++) {
    [a, e, i, o, u] = [(e + i + u) % MOD, (a + i) % MOD, (e + o) % MOD, i % MOD, (i + o) % MOD];
  }

  return (a + e + i + o + u) % MOD;
}
