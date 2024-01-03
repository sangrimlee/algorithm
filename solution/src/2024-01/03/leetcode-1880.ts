/**
 * 1880. Check if Word Equals Summation of Two Words
 * https://leetcode.com/problems/check-if-word-equals-summation-of-two-words
 */
export function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
  function convert(word: string) {
    const numericString = [...word].map((char) => char.charCodeAt(0) - 'a'.charCodeAt(0)).join('');
    return parseInt(numericString, 10);
  }

  return convert(firstWord) + convert(secondWord) === convert(targetWord);
}
