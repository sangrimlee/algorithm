/**
 * 2444. Count Subarrays With Fixed Bounds
 * https://leetcode.com/problems/count-subarrays-with-fixed-bounds
 */
export function countSubarrays(nums: number[], minK: number, maxK: number): number {
  const n = nums.length;

  let answer = 0;
  let start = 0;
  let lastMinIndex = -1;
  let lastMaxIndex = -1;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (num < minK || num > maxK) {
      start = i + 1;
    }
    if (num === maxK) {
      lastMaxIndex = i;
    }
    if (num === minK) {
      lastMinIndex = i;
    }
    if (start <= lastMinIndex && start <= lastMaxIndex) {
      answer += Math.min(lastMinIndex, lastMaxIndex) - start + 1;
    }
  }
  return answer;
}
