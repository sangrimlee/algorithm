/**
 * 2351. First Letter to Appear Twice
 * https://leetcode.com/problems/first-letter-to-appear-twice
 */
export function repeatedCharacter(s: string): string {
  const set = new Set();
  for (const char of s) {
    if (set.has(char)) {
      return char;
    }
    set.add(char);
  }
  return '';
}
