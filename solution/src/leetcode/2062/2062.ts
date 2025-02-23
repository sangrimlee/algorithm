/**
 * 2062. Count Vowel Substrings of a String
 * https://leetcode.com/problems/count-vowel-substrings-of-a-string
 */
export function countVowelSubstrings(word: string): number {
  function isVowel(char: string) {
    return /^[aeiou]$/.test(char);
  }

  const n = word.length;
  const lastVowelIndices = new Map<string, number>(
    ['a', 'e', 'i', 'o', 'u'].map((vowel) => [vowel, -2]),
  );

  let answer = 0;
  let lastConsonantIndex = -1;
  for (let i = 0; i < n; i++) {
    const char = word[i];
    if (isVowel(char)) {
      lastVowelIndices.set(char, i);
      const firstVowelIndex = Math.min(...lastVowelIndices.values());
      answer += Math.max(0, firstVowelIndex - lastConsonantIndex);
    } else {
      lastConsonantIndex = i;
    }
  }
  return answer;
}
