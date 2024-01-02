/**
 * 1869. Longer Contiguous Segments of Ones than Zeros
 * https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros
 */
export function checkZeroOnes(s: string): boolean {
  function getMaxLength(arr: string[]) {
    return arr.reduce((prev, s) => Math.max(prev, s.length), 0);
  }

  return getMaxLength(s.split(/0+/)) > getMaxLength(s.split(/1+/));
}
