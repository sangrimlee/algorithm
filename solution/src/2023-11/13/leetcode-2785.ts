/**
 * 2785. Sort Vowels in a String
 * https://leetcode.com/problems/sort-vowels-in-a-string
 */
export function sortVowels(s: string): string {
  const isVowel = (char: string) => /[aeiou]/i.test(char);
  const vowels = [...s].filter(isVowel).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  let answer = '';
  let vowelIndex = 0;
  for (const char of s) {
    if (isVowel(char)) {
      answer += vowels[vowelIndex];
      vowelIndex += 1;
    } else {
      answer += char;
    }
  }
  return answer;
}
