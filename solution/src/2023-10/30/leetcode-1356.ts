/**
 * 1356. Sort Integers by The Number of 1 Bits
 * https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits
 */
export function sortByBits(arr: number[]): number[] {
  const countBit = (num: number) => {
    let count = 0;
    while (0 < num) {
      count += 1;
      num &= num - 1;
    }
    return count;
  };

  const soryByBitCount = (a: number, b: number) => {
    const aBitCount = countBit(a);
    const bBitCount = countBit(b);
    return aBitCount === bBitCount ? a - b : aBitCount - bBitCount;
  };

  return arr.sort(soryByBitCount);
}
