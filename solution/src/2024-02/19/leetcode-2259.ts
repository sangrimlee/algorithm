/**
 * 2259. Remove Digit From Number to Maximize Result
 * https://leetcode.com/problems/remove-digit-from-number-to-maximize-result
 */
export function removeDigit(number: string, digit: string): string {
  function removeChar(s: string, i: number): string {
    return s.substring(0, i) + s.substring(i + 1);
  }

  const n = number.length;

  let removeIndex = -1;
  for (let i = 0; i < n; i++) {
    if (number[i] === digit) {
      removeIndex = i;
      if (i < n - 1 && +digit < +number[i + 1]) {
        return removeChar(number, i);
      }
    }
  }

  return removeChar(number, removeIndex);
}
