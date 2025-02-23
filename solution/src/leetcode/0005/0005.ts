/**
 * 5. Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/
 */

function findPalindrome(s: string, start: number, end: number) {
  while (0 <= start && end < s.length && s[start] === s[end]) {
    start--;
    end++;
  }
  return s.substring(start + 1, end);
}

export function longestPalindrome(s: string): string {
  let answer = s[0];
  for (let i = 0; i < s.length; i++) {
    answer = [answer, findPalindrome(s, i, i), findPalindrome(s, i, i + 1)].reduce(
      (prev, curr) => (prev.length < curr.length ? curr : prev),
      '',
    );
  }

  return answer;
}
