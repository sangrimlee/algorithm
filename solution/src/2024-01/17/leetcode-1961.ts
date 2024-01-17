/**
 * 1961. Check If String Is a Prefix of Array
 * https://leetcode.com/problems/check-if-string-is-a-prefix-of-array
 */
export function isPrefixString(s: string, words: string[]): boolean {
  let currentIndex = 0;
  for (const word of words) {
    const prefix = s.substring(currentIndex, currentIndex + word.length);
    if (prefix !== word) {
      return false;
    }
    currentIndex += word.length;
    if (currentIndex === s.length) {
      return true;
    }
  }
  return false;
}
