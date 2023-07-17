/**
 * 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence
 */
export function isSubsequence(s: string, t: string): boolean {
  let [sIndex, tIndex] = [0, 0];
  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex += 1;
    }
    tIndex += 1;
  }
  return sIndex === s.length;
}
