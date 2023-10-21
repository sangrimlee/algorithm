/**
 * 680. Valid Palindrome II
 * https://leetcode.com/problems/valid-palindrome-ii
 */
export function validPalindrome(s: string, canRemove = true): boolean {
  let [start, end] = [0, s.length - 1];
  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        canRemove &&
        (validPalindrome(s.substring(start, end), false) ||
          validPalindrome(s.substring(start + 1, end + 1), false))
      );
    }
    start += 1;
    end -= 1;
  }
  return true;
}
