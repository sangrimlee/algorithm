/**
 * 2962. Count Subarrays Where Max Element Appears at Least K Times
 * https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times
 */
export function countSubarrays(nums: number[], k: number): number {
  const maxElement = nums.reduce((max, num) => (max < num ? num : max), 0);

  let answer = 0;
  let count = 0;
  let start = 0;
  for (const num of nums) {
    count += num === maxElement ? 1 : 0;
    while (k <= count) {
      count -= nums[start] === maxElement ? 1 : 0;
      start += 1;
    }
    answer += start;
  }
  return answer;
}
