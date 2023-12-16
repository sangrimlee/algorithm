/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const charCount = new Map<string, number>();
  for (const char of s) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }
  for (const char of t) {
    const count = charCount.get(char) ?? 0;
    if (count === 0) {
      return false;
    }
    charCount.set(char, count - 1);
  }
  return true;
}
