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
  for (const num of nums) {
    acc = fn(acc, num);
  }
  return acc;
}
