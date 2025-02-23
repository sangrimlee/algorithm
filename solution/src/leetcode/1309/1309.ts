/**
 * 1309. Decrypt String from Alphabet to Integer Mapping
 * https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping
 */
export function freqAlphabets(s: string): string {
  const decrypt = (chars: string) => {
    const code = parseInt(chars.replace('#', '')) + 96;
    return String.fromCharCode(code);
  };

  return s.replace(/(\d\d#|\d)/g, decrypt);
}
