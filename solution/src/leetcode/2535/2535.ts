/**
 * 2535. Difference Between Element Sum and Digit Sum of an Array
 * https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array
 */
export function differenceOfSum(nums: number[]): number {
  function sumDigit(num: number) {
    let sum = 0;
    while (0 < num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  const elementSum = nums.reduce((acc, num) => acc + num, 0);
  const digitSum = nums.reduce((acc, num) => acc + sumDigit(num), 0);
  return Math.abs(elementSum - digitSum);
}
