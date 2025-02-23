/**
 * 2309. Greatest English Letter in Upper and Lower Case
 * https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case
 */
export function greatestLetter(s: string): string {
  const set = new Set(s);

  const [start, end] = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];
  for (let charCode = end; start <= charCode; charCode--) {
    const char = String.fromCharCode(charCode);
    if (set.has(char) && set.has(char.toLowerCase())) {
      return char;
    }
  }
  return '';
}
