/**
 * 3226. Number of Bit Changes to Make Two Integers Equal
 * https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal
 */
export function minChanges(n: number, k: number): number {
  if ((n & k) !== k) {
    return -1;
  }
  return countBit(n) - countBit(k);
}

function countBit(num: number): number {
  let bitCount = 0;
  while (0 < num) {
    bitCount += 1;
    num = num & (num - 1);
  }
  return bitCount;
}