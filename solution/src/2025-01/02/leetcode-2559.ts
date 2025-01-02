/**
 * 2559. Count Vowel Strings in Ranges
 * https://leetcode.com/problems/count-vowel-strings-in-ranges
 */
export function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowels = new Set('aeiou');
  const isVowelString = (word: string) => {
    return vowels.has(word[0]) && vowels.has(word[word.length - 1]);
  };

  const prefixSum = new Array(words.length + 1).fill(0);
  words.forEach((word, i) => {
    prefixSum[i + 1] = prefixSum[i] + (isVowelString(word) ? 1 : 0);
  });

  return queries.map(([l, r]) => prefixSum[r + 1] - prefixSum[l]);
}
