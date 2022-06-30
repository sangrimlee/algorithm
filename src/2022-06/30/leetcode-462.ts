/**
 * 462. Minimum Moves to Equal Array Elements II
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
 */
export function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const mid = nums[Math.floor(n / 2)];
  return nums.reduce((prev, curr) => prev + Math.abs(mid - curr), 0);
}
