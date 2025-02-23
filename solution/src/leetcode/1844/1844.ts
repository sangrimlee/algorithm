/**
 * 1844. Replace All Digits with Characters
 * https://leetcode.com/problems/replace-all-digits-with-characters
 */
export function replaceDigits(s: string): string {
  const shift = (c: string, x: number) => {
    return String.fromCharCode(c.charCodeAt(0) + x);
  };

  return s
    .split('')
    .map((char, i) => (i % 2 === 0 ? char : shift(s[i - 1], +char)))
    .join('');
}
