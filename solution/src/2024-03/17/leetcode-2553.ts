/**
 * 2553. Separate the Digits in an Array
 * https://leetcode.com/problems/separate-the-digits-in-an-array
 */
export function separateDigits(nums: number[]): number[] {
  function separateDigit(num: number): number[] {
    const digits: number[] = [];
    while (0 < num) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    return digits.reverse();
  }
  return nums.flatMap(separateDigit);
}
