/**
 * 2788. Split Strings by Separator
 * https://leetcode.com/problems/split-strings-by-separator
 */
export function splitWordsBySeparator(words: string[], separator: string): string[] {
  function splitWord(word: string) {
    return word.split(separator).filter((s) => s !== '');
  }
  return words.flatMap(splitWord);
}
