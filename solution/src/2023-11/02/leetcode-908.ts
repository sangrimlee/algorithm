/**
 * 908. Smallest Range I
 * https://leetcode.com/problems/smallest-range-i
 */
export function smallestRangeI(nums: number[], k: number): number {
  const [max, min] = nums.reduce(
    (prev, num) => [Math.max(prev[0], num), Math.min(prev[1], num)],
    [nums[0], nums[0]],
  );
  return Math.max(0, max - min - 2 * k);
}
