/**
 * 1763. Longest Nice Substring
 * https://leetcode.com/problems/longest-nice-substring
 */
export function longestNiceSubstring(s: string): string {
  if (s.length < 2) {
    return '';
  }
  const set = new Set(s);
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!set.has(char.toLowerCase()) || !set.has(char.toUpperCase())) {
      const leftSubstring = longestNiceSubstring(s.substring(0, i));
      const rightSubstring = longestNiceSubstring(s.substring(i + 1));
      return leftSubstring >= rightSubstring ? leftSubstring : rightSubstring;
    }
  }
  return s;
}
