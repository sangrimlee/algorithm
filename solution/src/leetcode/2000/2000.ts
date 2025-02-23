/**
 * 2000. Reverse Prefix of Word
 * https://leetcode.com/problems/reverse-prefix-of-word
 */
export function reversePrefix(word: string, ch: string): string {
  function reverseString(s: string) {
    return s.split('').reverse().join('');
  }

  const i = word.indexOf(ch);
  if (i === -1) {
    return word;
  }
  return reverseString(word.substring(0, i + 1)) + word.substring(i + 1);
}
