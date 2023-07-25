import { range } from '@algorithm/lib';

/**
 * 1493. Longest Subarray of 1's After Deleting One Element
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element
 */
export function longestSubarray(nums: number[]): number {
  const n = nums.length;

  let answer = 0;
  let left = 0;
  let zeroCount = 0;
  for (const right of range(n)) {
    zeroCount -= nums[right] - 1;
    while (1 < zeroCount) {
      zeroCount += nums[left] - 1;
      left += 1;
    }
    answer = Math.max(answer, right - left);
  }

  return answer;
}
