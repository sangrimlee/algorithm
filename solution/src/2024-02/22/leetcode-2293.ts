/**
 * 2293. Min Max Game
 * https://leetcode.com/problems/min-max-game
 */
export function minMaxGame(nums: number[]): number {
  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }
  const m = Math.floor(n / 2);
  const newNums = Array.from({ length: m }).map((_, i) =>
    i % 2 === 0 ? Math.min(nums[2 * i], nums[2 * i + 1]) : Math.max(nums[2 * i], nums[2 * i + 1]),
  );
  return minMaxGame(newNums);
}
