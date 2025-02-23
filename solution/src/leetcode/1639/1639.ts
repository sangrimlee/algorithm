/**
 * 1639. Number of Ways to Form a Target String Given a Dictionary
 * https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary
 */
export function numWays(words: string[], target: string): number {
  const MOD = 10 ** 9 + 7;
  const [wordLength, targetLength] = [words[0].length, target.length];
  const dp: number[] = new Array<number>(targetLength + 1).fill(0);
  dp[0] = 1;

  const counter = new CharCounter();
  for (let i = 0; i < wordLength; i++) {
    for (const word of words) {
      counter.add(word[i]);
    }
    for (let j = Math.min(targetLength - 1, i); 0 <= j; j--) {
      dp[j + 1] += (dp[j] * counter.get(target[j])) % MOD;
    }
    counter.reset();
  }
  return dp[targetLength] % MOD;
}

class CharCounter {
  private readonly counter: number[];
  constructor() {
    this.counter = new Array<number>(26).fill(0);
  }

  private getIndex(char: string): number {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  add(char: string): void {
    this.counter[this.getIndex(char)] += 1;
  }

  get(char: string): number {
    return this.counter[this.getIndex(char)];
  }

  reset(): void {
    this.counter.fill(0);
  }
}
