/**
 * 806. Number of Lines To Write String
 * https://leetcode.com/problems/number-of-lines-to-write-string
 */
export function numberOfLines(widths: number[], s: string): [number, number] {
  const aCode = 'a'.charCodeAt(0);

  let line = 1;
  let lastWidth = 0;
  for (let i = 0; i < s.length; i++) {
    const width = widths[s.charCodeAt(i) - aCode];
    lastWidth += width;
    if (100 < lastWidth) {
      lastWidth = width;
      line += 1;
    }
  }
  return [line, lastWidth];
}
