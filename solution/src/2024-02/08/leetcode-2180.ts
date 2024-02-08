/**
 * 2180. Count Integers With Even Digit Sum
 * https://leetcode.com/problems/count-integers-with-even-digit-sum
 */
export function countEven(num: number): number {
  let current = num;
  let digitSum = 0;
  while (0 < current) {
    digitSum += current % 10;
    current = Math.floor(current / 10);
  }
  return Math.floor((num - (digitSum % 2)) / 2);
}
