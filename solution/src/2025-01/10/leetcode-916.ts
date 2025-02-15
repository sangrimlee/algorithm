/**
 * 916. Word Subsets
 * https://leetcode.com/problems/word-subsets
 */
export function wordSubsets(words1: string[], words2: string[]): string[] {
  const totalCounter = countMaxChars(words2);
  return words1.filter((word) => isUniversalWord(word, totalCounter));
}

function countChars(word: string): Map<string, number> {
  const counter = new Map<string, number>();
  for (const char of word) {
    counter.set(char, (counter.get(char) ?? 0) + 1);
  }
  return counter;
}

function countMaxChars(words: string[]): Map<string, number> {
  const totalCounter = new Map<string, number>();
  for (const word of words) {
    const wordCounter = countChars(word);
    for (const [char, count] of wordCounter) {
      totalCounter.set(char, Math.max(totalCounter.get(char) ?? 0, count));
    }
  }
  return totalCounter;
}

function isUniversalWord(word: string, totalCounter: Map<string, number>): boolean {
  const wordCounter = countChars(word);
  for (const [char, count] of totalCounter) {
    if ((wordCounter.get(char) ?? 0) < count) {
      return false;
    }
  }
  return true;
}
