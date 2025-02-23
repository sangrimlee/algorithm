/**
 * 2595. Number of Even and Odd Bits
 * https://leetcode.com/problems/number-of-even-and-odd-bits
 */
export function evenOddBit(n: number): number[] {
  let [even, odd] = [0, 0];
  for (let i = 0; i < 10; i++) {
    if ((n & (1 << i)) !== 0) {
      if (i % 2 === 0) {
        even += 1;
      } else {
        odd += 1;
      }
    }
  }
  return [even, odd];
}
