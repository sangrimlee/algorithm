/**
 * 1592. Rearrange Spaces Between Words
 * https://leetcode.com/problems/rearrange-spaces-between-words
 */
export function reorderSpaces(text: string): string {
  const spaces = text.replace(/[a-z]+/gi, '').length;
  const words = text.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0] + ' '.repeat(spaces);
  }

  const spaceBetween = Math.floor(spaces / (words.length - 1));
  const remainSpace = spaces % (words.length - 1);
  return words.join(' '.repeat(spaceBetween)) + ' '.repeat(remainSpace);
}
