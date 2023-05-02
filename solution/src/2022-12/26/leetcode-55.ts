import { range } from '@algorithm/lib';

/**
 * 55. Jump Game
 * https://leetcode.com/problems/jump-game
 */
export function canJump(nums: number[]): boolean {
  const n = nums.length;

  let jumpable = 0;
  for (const i of range(n)) {
    if (i <= jumpable) {
      jumpable = Math.max(i + nums[i], jumpable);
    }
  }

  return n - 1 <= jumpable;
}
