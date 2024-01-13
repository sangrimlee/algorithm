/**
 * 1347. Minimum Number of Steps to Make Two Strings Anagram
 * https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram
 */
class CharCounter {
  private readonly map: Map<string, number>;

  constructor(s: string) {
    this.map = new Map();
    for (const char of s) {
      this.add(char);
    }
  }

  get(key: string): number {
    return this.map.get(key) ?? 0;
  }

  add(key: string) {
    return this.map.set(key, this.get(key) + 1);
  }

  entries() {
    return this.map.entries();
  }
}

export function minSteps(s: string, t: string): number {
  const sCounter = new CharCounter(s);
  const tCounter = new CharCounter(t);

  return [...sCounter.entries()].reduce(
    (prev, [char, count]) => prev + Math.max(count - tCounter.get(char), 0),
    0,
  );
}
