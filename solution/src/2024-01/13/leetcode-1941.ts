/**
 * 1941. Check if All Characters Have Equal Number of Occurrences
 * https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences
 */
export function areOccurrencesEqual(s: string): boolean {
  const charCount = new Map();
  for (const char of s) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }
  return new Set(charCount.values()).size === 1;
}
