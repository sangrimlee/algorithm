/**
 * 1930. Unique Length-3 Palindromic Subsequences
 * https://leetcode.com/problems/unique-length-3-palindromic-subsequences
 */
export function countPalindromicSubsequence(s: string): number {
  const chars = 'abcdefghijklmnopqrstuvwxyz';

  let answer = 0;
  for (const char of chars) {
    const [startIndex, endIndex] = [s.indexOf(char), s.lastIndexOf(char)];
    if (startIndex !== endIndex) {
      answer += new Set(s.substring(startIndex + 1, endIndex)).size;
    }
  }
  return answer;
}
