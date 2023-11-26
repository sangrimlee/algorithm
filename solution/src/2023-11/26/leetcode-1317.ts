/**
 * 1317. Convert Integer to the Sum of Two No-Zero Integers
 * https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers
 */
export function getNoZeroIntegers(n: number): number[] {
  const hasZero = (num: number) => {
    while (0 < num) {
      if (num % 10 === 0) {
        return true;
      }
      num = Math.floor(num / 10);
    }
    return false;
  };

  let num = 1;
  while (hasZero(num) || hasZero(n - num)) {
    num += 1;
  }
  return [num, n - num];
}
