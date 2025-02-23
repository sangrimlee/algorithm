/**
 * 890. Find and Replace Pattern
 * https://leetcode.com/problems/find-and-replace-pattern
 */
export function findAndReplacePattern(words: string[], pattern: string): string[] {
  const p = normalize(pattern);
  return words.filter((word) => isEqual(p, normalize(word)));
}

function normalize(word: string): number[] {
  const result = [];
  const map = new Map<string, number>();
  for (const char of word) {
    const id = map.get(char) ?? map.size;
    map.set(char, id);
    result.push(id);
  }
  return result;
}

function isEqual<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
