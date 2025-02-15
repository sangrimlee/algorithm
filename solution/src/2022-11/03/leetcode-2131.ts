/**
 * 2131. Longest Palindrome by Concatenating Two Letter Words
 * https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
 */
export function longestPalindrome(words: string[]): number {
  let answer = 0;
  let hasCenterValue = false;
  const counter = new Counter(words);

  for (const word of words) {
    const reversedWord = word.split('').reverse().join('');
    if (word === reversedWord && 0 < counter.get(word)) {
      if (2 <= counter.get(word)) {
        counter.sub(word, 2);
        answer += 4;
      } else if (!hasCenterValue) {
        counter.sub(word);
        answer += 2;
        hasCenterValue = true;
      }
    } else if (0 < counter.get(word) && 0 < counter.get(reversedWord)) {
      answer += 4;
      counter.sub(word);
      counter.sub(reversedWord);
    }
  }

  return answer;
}

class Counter<V> {
  counter: Map<V, number>;

  constructor(arr: V[]) {
    this.counter = new Map();
    for (const value of arr) {
      this.add(value);
    }
  }

  get(value: V): number {
    return this.counter.get(value) ?? 0;
  }

  add(value: V, count = 1): void {
    this.counter.set(value, this.get(value) + count);
  }

  sub(value: V, count = 1): void {
    this.counter.set(value, this.get(value) - count);
  }
}
