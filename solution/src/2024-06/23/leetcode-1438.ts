/**
 * 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 * https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit
 */
export function longestSubarray(nums: number[], limit: number): number {
  const minDeque: number[] = [];
  const maxDeque: number[] = [];

  let answer = 0;
  let [left, right] = [0, 0];
  while (right < nums.length) {
    while (0 < minDeque.length && nums[right] <= nums[minDeque[minDeque.length - 1]]) {
      minDeque.pop();
    }
    while (0 < maxDeque.length && nums[right] >= nums[maxDeque[maxDeque.length - 1]]) {
      maxDeque.pop();
    }
    minDeque.push(right);
    maxDeque.push(right);

    while (limit < nums[maxDeque[0]] - nums[minDeque[0]]) {
      left += 1;
      if (minDeque[0] < left) {
        minDeque.shift();
      }
      if (maxDeque[0] < left) {
        maxDeque.shift();
      }
    }
    answer = Math.max(answer, right - left + 1);
    right += 1;
  }
  return answer;
}
