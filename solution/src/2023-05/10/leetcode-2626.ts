/**
 * 2626. Array Reduce Transformation
 * https://leetcode.com/problems/array-reduce-transformation
 */
export function reduce(
  nums: number[],
  fn: (acc: number, curr: number) => number,
  init: number,
): number {
  let acc = init;
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }
  return acc;
}
