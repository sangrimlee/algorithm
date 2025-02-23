/**
 * 1832. Check if the Sentence Is Pangram
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram
 */
export function checkIfPangram(sentence: string): boolean {
  return new Set(sentence).size === 26;
}
