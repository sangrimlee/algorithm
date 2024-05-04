/**
 * 3083. Existence of a Substring in a String and Its Reverse
 * https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse
 */
export function isSubstringPresent(s: string): boolean {
  const n = s.length;
  const substrings = new Set();
  for (let i = 0; i < n - 1; i++) {
    substrings.add(s[i] + s[i + 1]);
  }

  for (let i = n - 1; 0 < i; i--) {
    if (substrings.has(s[i] + s[i - 1])) {
      return true;
    }
  }
  return false;
}
