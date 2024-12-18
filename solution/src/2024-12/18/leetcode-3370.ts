/**
 * 3370. Smallest Number With All Set Bits
 * https://leetcode.com/problems/smallest-number-with-all-set-bits
 */
export function smallestNumber(n: number): number {
  return (1 << bitLength(n)) - 1;
}

function bitLength(num: number): number {
  let length = 0;
  while (0 < num) {
    num >>= 1;
    length += 1;
  }
  return length;
}
