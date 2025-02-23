/**
 * 1967. Number of Strings That Appear as Substrings in Word
 * https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word
 */
export function numOfStrings(patterns: string[], word: string): number {
  return patterns.filter((pattern) => word.includes(pattern)).length;
}
