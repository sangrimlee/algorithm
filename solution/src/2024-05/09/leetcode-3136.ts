/**
 * 3136. Valid Word
 * https://leetcode.com/problems/valid-word
 */
export function isValid(word: string): boolean {
  return /^(?=.*[aeiou])(?=.*[^0-9aeiou])[a-z0-9]{3,}$/i.test(word);
}
