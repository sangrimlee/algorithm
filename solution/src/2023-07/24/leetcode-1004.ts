import { range } from '@algorithm/lib';

/**
 * 1004. Max Consecutive Ones III
 * https://leetcode.com/problems/max-consecutive-ones-iii
 */
export function longestOnes(nums: number[], k: number): number {
  const n = nums.length;

  let answer = 0;
  let left = 0;
  let zeroCount = 0;
  for (const right of range(n)) {
    zeroCount -= nums[right] - 1;
    while (k < zeroCount) {
      zeroCount += nums[left] - 1;
      left += 1;
    }
    answer = Math.max(answer, right - left + 1);
  }

  return answer;
}
