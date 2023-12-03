/**
 * 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
 * https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence
 */
export function isPrefixOfWord(sentence: string, searchWord: string): number {
  const words = sentence.split(' ');
  const result = words.findIndex((word) => word.startsWith(searchWord));
  return result === -1 ? result : result + 1;
}
