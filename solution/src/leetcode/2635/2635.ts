/**
 * 2635. Apply Transform Over Each Element in Array
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array
 */
export function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}
