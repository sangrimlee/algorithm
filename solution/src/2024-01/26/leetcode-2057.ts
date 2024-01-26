/**
 * 2057. Smallest Index With Equal Value
 * https://leetcode.com/problems/smallest-index-with-equal-value
 */
export function smallestEqual(nums: number[]): number {
  return nums.findIndex((num, i) => num === i % 10);
}
