/**
 * 2455. Average Value of Even Numbers That Are Divisible by Three
 * https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three
 */
export function averageValue(nums: number[]): number {
  function average(nums: number[]) {
    if (nums.length === 0) {
      return 0;
    }
    return Math.floor(nums.reduce((acc, num) => acc + num, 0) / nums.length);
  }

  return average(nums.filter((num) => num % 6 === 0));
}
