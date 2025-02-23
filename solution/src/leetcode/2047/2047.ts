/**
 * 2047. Number of Valid Words in a Sentence
 * https://leetcode.com/problems/number-of-valid-words-in-a-sentence
 */
export function countValidWords(sentence: string): number {
  const words = sentence.split(/\s+/);
  function isValid(word: string): boolean {
    return 0 < word.length && /^(?:[a-z]+(?:-[a-z]+)?)?[!.,]?$/.test(word);
  }
  return words.filter(isValid).length;
}
