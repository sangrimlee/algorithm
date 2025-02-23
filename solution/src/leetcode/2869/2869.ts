/**
 * 2869. Minimum Operations to Collect Elements
 * https://leetcode.com/problems/minimum-operations-to-collect-elements
 */
export function minOperations(nums: number[], k: number): number {
  let answer = 0;
  let currentIndex = nums.length - 1;
  const collections = new Set();
  while (0 <= currentIndex && collections.size < k) {
    if (nums[currentIndex] <= k) {
      collections.add(nums[currentIndex]);
    }
    currentIndex -= 1;
    answer += 1;
  }
  return answer;
}
