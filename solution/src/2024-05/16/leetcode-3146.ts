/**
 * 3146. Permutation Difference between Two Strings
 * https://leetcode.com/problems/permutation-difference-between-two-strings
 */
export function findPermutationDifference(s: string, t: string): number {
  const indices = new Map([...s].map((char, i) => [char, i]));
  return [...t].reduce((prev, char, i) => prev + Math.abs(indices.get(char)! - i), 0);
}
