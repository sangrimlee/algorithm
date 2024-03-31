/**
 * 2697. Lexicographically Smallest Palindrome
 * https://leetcode.com/problems/lexicographically-smallest-palindrome
 */
export function makeSmallestPalindrome(s: string): string {
  const chars = [...s];
  let [start, end] = [0, s.length - 1];
  while (start <= end) {
    if (chars[start] < chars[end]) {
      chars[end] = chars[start];
    } else {
      chars[start] = chars[end];
    }
    start += 1;
    end -= 1;
  }
  return chars.join('');
}
