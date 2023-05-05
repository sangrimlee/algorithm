/**
 * 1456. Maximum Number of Vowels in a Substring of Given Length
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
 */
export function maxVowels(s: string, k: number): number {
  const isVowel = (char: string) => /^[aeiou]$/.test(char);

  let answer = 0;
  let vowelCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (k <= i && isVowel(s[i - k])) {
      vowelCount -= 1;
    }
    if (isVowel(s[i])) {
      vowelCount += 1;
    }
    answer = Math.max(answer, vowelCount);
  }

  return answer;
}
