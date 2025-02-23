/**
 * 1897. Redistribute Characters to Make All Strings Equal
 * https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal
 */
export function makeEqual(words: string[]): boolean {
  const n = words.length;
  const charCount = new Map<string, number>();
  for (const word of words) {
    for (const char of word) {
      charCount.set(char, (charCount.get(char) ?? 0) + 1);
    }
  }
  return [...charCount.values()].every((count) => count % n === 0);
}
