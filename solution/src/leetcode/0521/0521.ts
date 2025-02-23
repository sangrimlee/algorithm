/**
 * 521. Longest Uncommon Subsequence I
 * https://leetcode.com/problems/longest-uncommon-subsequence-i
 */
export function findLUSlength(a: string, b: string): number {
  return a === b ? -1 : Math.max(a.length, b.length);
}
