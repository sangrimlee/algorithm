/**
 * 2185. Counting Words With a Given Prefix
 * https://leetcode.com/problems/counting-words-with-a-given-prefix
 */
export function prefixCount(words: string[], pref: string): number {
  return words.filter((word) => word.startsWith(pref)).length;
}
