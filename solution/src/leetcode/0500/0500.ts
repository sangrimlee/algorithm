/**
 * 500. Keyboard Row
 * https://leetcode.com/problems/keyboard-row
 */
export function findWords(words: string[]): string[] {
  const rows = [/^[qwertyuiop]+$/i, /^[asdfghjkl]+$/i, /^[zxcvbnm]+$/i];
  return words.filter((word) => rows.some((row) => row.test(word)));
}
