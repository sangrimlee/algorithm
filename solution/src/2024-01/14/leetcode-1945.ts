/**
 * 1945. Sum of Digits of String After Convert
 * https://leetcode.com/problems/sum-of-digits-of-string-after-convert
 */
export function getLucky(s: string, k: number): number {
  function getAlphabetPosition(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  }
  function convert(s: string) {
    return s.split('').map(getAlphabetPosition).join('');
  }
  function transform(s: string) {
    return s
      .split('')
      .reduce((prev, char) => prev + parseInt(char), 0)
      .toString();
  }

  let answer = convert(s);
  for (let i = 1; i <= k; i++) {
    answer = transform(answer);
  }
  return parseInt(answer);
}
