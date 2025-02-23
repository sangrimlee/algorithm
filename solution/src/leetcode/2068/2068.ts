/**
 * 2068. Check Whether Two Strings are Almost Equivalent
 * https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent
 */
class CharCounter {
  private readonly counter: Map<string, number>;

  constructor(word: string) {
    this.counter = new Map();
    for (const char of word) {
      this.add(char);
    }
  }

  get(char: string) {
    return this.counter.get(char) ?? 0;
  }

  add(char: string) {
    return this.counter.set(char, this.get(char) + 1);
  }
}

export function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const counter1 = new CharCounter(word1);
  const counter2 = new CharCounter(word2);
  const chars = [...new Set(word1 + word2)];
  return chars.every((char) => Math.abs(counter1.get(char) - counter2.get(char)) <= 3);
}
