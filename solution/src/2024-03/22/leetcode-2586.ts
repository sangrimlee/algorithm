/**
 * 2586. Count the Number of Vowel Strings in Range
 * https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range
 */
export function vowelStrings(words: string[], left: number, right: number): number {
  function isVowelString(word: string) {
    return /[aeiou]/.test(word[0]) && /[aeiou]/.test(word[word.length - 1]);
  }

  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (isVowelString(words[i])) {
      answer += 1;
    }
  }
  return answer;
}
