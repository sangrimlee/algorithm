/**
 * 1425. Constrained Subsequence Sum
 * https://leetcode.com/problems/constrained-subsequence-sum
 */
export function constrainedSubsetSum(nums: number[], k: number): number {
  const queue: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] += queue[0] ?? 0;
    while (0 < queue.length && queue[queue.length - 1] < nums[i]) {
      queue.pop();
    }
    if (0 < nums[i]) {
      queue.push(nums[i]);
    }
    if (k <= i && queue[0] === nums[i - k]) {
      queue.shift();
    }
  }

  return nums.reduce((prev, curr) => Math.max(prev, curr), Number.MIN_SAFE_INTEGER);
}
