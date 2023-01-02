import { range } from '@1d1s/lib';

/**
 * 290. Word Pattern
 * https://leetcode.com/problems/word-pattern
 */
export function wordPattern(patterns: string, s: string): boolean {
  const n = patterns.length;
  const words = s.split(' ');
  const wordToPattern = new Map<string, string>();

  if (patterns.length !== words.length) {
    return false;
  }

  if (new Set(patterns).size !== new Set(words).size) {
    return false;
  }

  for (const i of range(n)) {
    const [word, pattern] = [words[i], patterns[i]];
    if (!wordToPattern.has(word)) {
      wordToPattern.set(word, pattern);
    } else if (wordToPattern.get(word) !== pattern) {
      return false;
    }
  }

  return true;
}
