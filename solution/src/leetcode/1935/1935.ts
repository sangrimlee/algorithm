/**
 * 1935. Maximum Number of Words You Can Type
 * https://leetcode.com/problems/maximum-number-of-words-you-can-type
 */
export function canBeTypedWords(text: string, brokenLetters: string): number {
  const brokenLetterSet = new Set(brokenLetters);
  const canBeTypedWord = (word: string) => {
    for (const char of word) {
      if (brokenLetterSet.has(char)) {
        return false;
      }
    }
    return true;
  };
  return text.split(' ').filter(canBeTypedWord).length;
}
