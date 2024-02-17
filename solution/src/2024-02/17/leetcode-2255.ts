/**
 * 2255. Count Prefixes of a Given String
 * https://leetcode.com/problems/count-prefixes-of-a-given-string
 */
export function countPrefixes(words: string[], s: string): number {
  return words.reduce((prev, word) => (s.startsWith(word) ? prev + 1 : prev), 0);
}
