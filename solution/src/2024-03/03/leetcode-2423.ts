/**
 * 2423. Remove Letter To Equalize Frequency
 * https://leetcode.com/problems/remove-letter-to-equalize-frequency
 */
class CharCounter {
  private readonly map: Map<string, number>;

  constructor(str: string) {
    this.map = new Map();
    for (const char of str) {
      this.add(char);
    }
  }

  get(char: string): number {
    return this.map.get(char) ?? 0;
  }

  add(char: string) {
    return this.map.set(char, this.get(char) + 1);
  }

  sub(char: string) {
    return this.map.set(char, this.get(char) - 1);
  }

  delete(char: string) {
    return this.map.delete(char);
  }

  isSameCount() {
    return new Set(this.map.values()).size === 1;
  }
}

export function equalFrequency(word: string): boolean {
  const charCounter = new CharCounter(word);

  for (const char of word) {
    charCounter.sub(char);
    if (charCounter.get(char) === 0) {
      charCounter.delete(char);
    }

    if (charCounter.isSameCount()) {
      return true;
    }

    charCounter.add(char);
  }

  return false;
}
