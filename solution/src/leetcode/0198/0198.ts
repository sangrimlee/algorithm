/**
 * 198. House Robber
 * https://leetcode.com/problems/house-robber
 */
export function rob(nums: number[]): number {
  let [prev, curr] = [0, 0];
  for (const num of nums) {
    const next = Math.max(curr, prev + num);
    prev = curr;
    curr = next;
  }

  return curr;
}
