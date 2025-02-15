/**
 * 3146. Permutation Difference between Two Strings
 * https://leetcode.com/problems/permutation-difference-between-two-strings
 */
export function findPermutationDifference(s: string, t: string): number {
  const indices = new Map(s.split('').map((char, i) => [char, i]));
  return t.split('').reduce((prev, char, i) => prev + Math.abs((indices.get(char) ?? 0) - i), 0);
}
