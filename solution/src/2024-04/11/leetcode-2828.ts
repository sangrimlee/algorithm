/**
 * 2828. Check if a String Is an Acronym of Words
 * https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words
 */
export function isAcronym(words: string[], s: string): boolean {
  if (words.length !== s.length) {
    return false;
  }
  return words.every((word, i) => word.startsWith(s[i]));
}
