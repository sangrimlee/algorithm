/**
 * 2273. Find Resultant Array After Removing Anagrams
 * https://leetcode.com/problems/find-resultant-array-after-removing-anagrams
 */
class CharCounter extends Map<string, number> {
  constructor(s: string) {
    super();
    for (const char of s) {
      this.add(char);
    }
  }

  get(char: string): number {
    return super.get(char) ?? 0;
  }

  add(char: string): void {
    super.set(char, this.get(char) + 1);
  }

  isAnagram(charCounter: CharCounter): boolean {
    if (this.size !== charCounter.size) {
      return false;
    }

    for (const [char, count] of this.entries()) {
      if (count !== charCounter.get(char)) {
        return false;
      }
    }
    return true;
  }
}

export function removeAnagrams(words: string[]): string[] {
  const answer: string[] = [];
  let prevCharCounter = new CharCounter('');
  for (const word of words) {
    const charCounter = new CharCounter(word);
    if (!prevCharCounter.isAnagram(charCounter)) {
      answer.push(word);
      prevCharCounter = charCounter;
    }
  }
  return answer;
}
