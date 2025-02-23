/**
 * 2486. Append Characters to String to Make Subsequence
 * https://leetcode.com/problems/append-characters-to-string-to-make-subsequence
 */
export function appendCharacters(s: string, t: string): number {
  const [m, n] = [s.length, t.length];
  let [sIndex, tIndex] = [0, 0];

  while (sIndex < m && tIndex < n) {
    tIndex += s[sIndex] === t[tIndex] ? 1 : 0;
    sIndex += 1;
  }
  return n - tIndex;
}
