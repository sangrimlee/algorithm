/**
 * 1332. Remove Palindromic Subsequences
 * https://leetcode.com/problems/remove-palindromic-subsequences/
 */

export function removePalindromeSub(s: string): number {
  function isPalindrome(s: string) {
    let [start, end] = [0, s.length - 1];
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
  return s.length ? (isPalindrome(s) ? 1 : 2) : 0;
}
