/**
 * 1371. Find the Longest Substring Containing Vowels in Even Counts
 * https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts
 */
export function findTheLongestSubstring(s: string): number {
  const n = s.length;
  const vowels = 'aeioou';
  const firstIndices = new Map<number, number>([[0, -1]]);

  let answer = 0;
  let prefixXOR = 0;
  for (let i = 0; i < n; i++) {
    const bit = vowels.indexOf(s[i]);
    prefixXOR ^= bit === -1 ? 0 : 1 << bit;
    const firstIndex = firstIndices.get(prefixXOR) ?? i;
    firstIndices.set(prefixXOR, firstIndex);
    answer = Math.max(answer, i - firstIndex);
  }
  return answer;
}
