/**
 * 953. Verifying an Alien Dictionary
 * https://leetcode.com/problems/verifying-an-alien-dictionary
 */
export function isAlienSorted(words: string[], order: string): boolean {
  const aCode = 'a'.charCodeAt(0);
  const dict = Object.fromEntries(
    order.split('').map((alphabet, i) => [alphabet, String.fromCharCode(aCode + i)]),
  );

  const translate = (word: string) => {
    return word
      .split('')
      .map((char) => dict[char])
      .join('');
  };

  const n = words.length;
  const translatedWords = words.map(translate);
  for (let i = 1; i < n; i++) {
    if (translatedWords[i - 1] > translatedWords[i]) {
      return false;
    }
  }
  return true;
}
