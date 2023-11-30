/**
 * 1408. String Matching in an Array
 * https://leetcode.com/problems/string-matching-in-an-array
 */
export function stringMatching(words: string[]): string[] {
  return words.filter((word) => words.some((w) => w !== word && w.includes(word)));
}
