/**
 * 1048. Longest String Chain
 * https://leetcode.com/problems/longest-string-chain/
 */

class Counter {
  private readonly map: Map<string, number>;
  constructor() {
    this.map = new Map();
  }

  has(key: string): boolean {
    return this.map.has(key);
  }

  get(key: string): number {
    return this.map.get(key) ?? 0;
  }

  set(key: string, value: number): void {
    this.map.set(key, value);
  }
}

export function longestStrChain(words: string[]): number {
  const dp = new Counter();
  const removeCharFromWord = (word: string, index: number) => {
    return word.slice(0, index) + word.slice(index + 1, word.length);
  };

  let answer = 1;
  Array.from(words)
    .sort((a, b) => a.length - b.length)
    .forEach((word) => {
      dp.set(word, 1);
      for (let i = 0; i < word.length; i++) {
        const removedWord = removeCharFromWord(word, i);
        if (dp.get(word) <= dp.get(removedWord)) {
          dp.set(word, dp.get(removedWord) + 1);
        }
      }
      answer = Math.max(answer, dp.get(word));
    });
  return answer;
}
