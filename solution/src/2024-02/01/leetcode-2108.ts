/**
 * 2108. Find First Palindromic String in the Array
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array
 */
export function firstPalindrome(words: string[]): string {
  function isPalindrome(word: string) {
    let [start, end] = [0, word.length - 1];
    while (start < end) {
      if (word[start] !== word[end]) {
        return false;
      }
      start += 1;
      end -= 1;
    }
    return true;
  }
  return words.find(isPalindrome) ?? '';
}
