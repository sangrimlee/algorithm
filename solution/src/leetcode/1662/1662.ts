/**
 * 1662. Check If Two String Arrays are Equivalent
 * https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent
 */
export function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join('') === word2.join('');
}
