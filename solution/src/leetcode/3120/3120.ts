/**
 * 3120. Count the Number of Special Characters I
 * https://leetcode.com/problems/count-the-number-of-special-characters-i
 */
export function numberOfSpecialChars(word: string): number {
  const set = new Set(word);
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

  let answer = 0;
  for (const char of alphabets) {
    if (set.has(char) && set.has(char.toUpperCase())) {
      answer += 1;
    }
  }
  return answer;
}
