/**
 * 2744. Find Maximum Number of String Pairs
 * https://leetcode.com/problems/find-maximum-number-of-string-pairs
 */
export function maximumNumberOfStringPairs(words: string[]): number {
  function reverseWord(word: string) {
    return [...word].reverse().join('');
  }

  let answer = 0;
  const counter = new Counter();
  for (const word of words) {
    const reversedWord = reverseWord(word);
    if (0 < counter.get(reversedWord)) {
      answer += 1;
      counter.sub(reversedWord);
    } else {
      counter.add(word);
    }
  }
  return answer;
}

class Counter {
  map: Map<string, number>;

  constructor() {
    this.map = new Map();
  }

  get(word: string) {
    return this.map.get(word) ?? 0;
  }

  add(word: string) {
    return this.map.set(word, this.get(word) + 1);
  }

  sub(word: string) {
    return this.map.set(word, this.get(word) - 1);
  }
}
