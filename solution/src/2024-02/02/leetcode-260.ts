/**
 * 260. Single Number III
 * https://leetcode.com/problems/single-number-iii
 */
export function singleNumber(nums: number[]): number[] {
  const xor = nums.reduce((prev, num) => prev ^ num, 0);
  const rightMostBit = xor & ~(xor - 1);
  let [x, y] = [0, 0];
  nums.forEach((num) => {
    if (0 < (num & rightMostBit)) {
      x ^= num;
    } else {
      y ^= num;
    }
  });
  return [x, y];
}
