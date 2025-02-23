/**
 * 1160. Find Words That Can Be Formed by Characters
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters
 */
export function countCharacters(words: string[], chars: string): number {
  const createCounter = (chars: string) => {
    const counter = new Map<string, number>();
    for (const char of chars) {
      counter.set(char, (counter.get(char) ?? 0) + 1);
    }
    return counter;
  };

  const charCounter = createCounter(chars);

  const isGoodWord = (word: string) => {
    const wordCounter = createCounter(word);
    for (const [char, count] of wordCounter.entries()) {
      const charCount = charCounter.get(char) ?? 0;
      if (charCount < count) {
        return false;
      }
    }
    return true;
  };

  return words.reduce((prev, word) => (isGoodWord(word) ? prev + word.length : prev), 0);
}
