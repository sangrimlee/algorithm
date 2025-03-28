/**
 * 3349. Adjacent Increasing Subarrays Detection I
 * https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i
 */
export function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  const n = nums.length;
  let currentLength = 1;
  let prevLength = 0;
  for (let end = 1; end < n; end++) {
    if (nums[end - 1] < nums[end]) {
      currentLength += 1;
    } else {
      prevLength = currentLength;
      currentLength = 1;
    }
    if (2 * k <= currentLength || k <= Math.min(prevLength, currentLength)) {
      return true;
    }
  }
  return false;
}
