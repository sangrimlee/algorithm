/**
 * 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
 * https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves
 */
export function minDifference(nums: number[]): number {
  const n = nums.length;
  if (n < 5) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  return Math.min(
    nums[n - 1] - nums[3],
    nums[n - 2] - nums[2],
    nums[n - 3] - nums[1],
    nums[n - 4] - nums[0],
  );
}
