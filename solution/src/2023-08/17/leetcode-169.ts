/**
 * 169. Majority Element
 * https://leetcode.com/problems/majority-element
 */
export function majorityElement(nums: number[]): number {
  let count = 0;
  let majority = Infinity;
  for (const num of nums) {
    if (count === 0) {
      majority = num;
    }
    count += majority === num ? 1 : -1;
  }
  return majority;
}
