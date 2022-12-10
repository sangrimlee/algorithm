/**
 * 1696. Jump Game VI
 * https://leetcode.com/problems/jump-game-vi/
 */
export function maxResult(nums: number[], k: number): number {
  const n = nums.length;
  const queue = [[nums[0], 0]];
  for (let i = 1; i < n; i++) {
    while (queue.length && queue[0][1] + k < i) {
      queue.shift();
    }
    const cost = nums[i] + queue[0][0];
    while (queue.length && queue[queue.length - 1][0] <= cost) {
      queue.pop();
    }
    queue.push([cost, i]);
  }
  return queue[queue.length - 1][0];
}
