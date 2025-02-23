/**
 * 1684. Count the Number of Consistent Strings
 * https://leetcode.com/problems/count-the-number-of-consistent-strings
 */
export function countConsistentStrings(allowed: string, words: string[]): number {
  const allowedSet = new Set(allowed);
  const isAllowed = (word: string) => {
    for (const char of word) {
      if (!allowedSet.has(char)) {
        return false;
      }
    }
    return true;
  };
  return words.filter(isAllowed).length;
}
