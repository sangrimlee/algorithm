/**
 * 409. Longest Palindrome
 * https://leetcode.com/problems/longest-palindrome
 */
export function longestPalindrome(s: string): number {
  let answer = 0;
  const set = new Set<string>();

  for (const char of s) {
    if (set.has(char)) {
      set.delete(char);
      answer += 2;
    } else {
      set.add(char);
    }
  }

  return 0 < set.size ? answer + 1 : answer;
}
