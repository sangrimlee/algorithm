/**
 * 2114. Maximum Number of Words Found in Sentences
 * https://leetcode.com/problems/maximum-number-of-words-found-in-sentences
 */
export function mostWordsFound(sentences: string[]): number {
  function countWord(sentence: string) {
    return sentence.split(' ').length;
  }
  return sentences.reduce((wordCount, sentence) => Math.max(wordCount, countWord(sentence)), 0);
}
