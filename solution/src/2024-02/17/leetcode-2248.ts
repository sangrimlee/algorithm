/**
 * 2248. Intersection of Multiple Arrays
 * https://leetcode.com/problems/intersection-of-multiple-arrays
 */
export function intersection(nums: number[][]): number[] {
  const n = nums.length;
  const counter = new Map<number, number>();
  for (const arr of nums) {
    for (const num of arr) {
      counter.set(num, (counter.get(num) ?? 0) + 1);
    }
  }

  return [...counter.keys()].filter((num) => counter.get(num) === n).sort((a, b) => a - b);
}
