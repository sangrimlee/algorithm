/**
 * 1470. Shuffle the Array
 * https://leetcode.com/problems/shuffle-the-array
 */
export function shuffle(nums: number[], n: number): number[] {
  return nums.map((_, i) => (i % 2 === 0 ? nums[i / 2] : nums[n + Math.floor(i / 2)]));
}
