/**
 * 3379. Transformed Array
 * https://leetcode.com/problems/transformed-array
 */
export function constructTransformedArray(nums: number[]): number[] {
  const n = nums.length;
  return nums.map((num, i) => nums[(n + i + (num % n)) % n]);
}
