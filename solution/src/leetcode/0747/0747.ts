/**
 * 747. Largest Number At Least Twice of Others
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others
 */
export function dominantIndex(nums: number[]): number {
  let largestIndex = nums[0] < nums[1] ? 1 : 0;
  let secondLargestIndex = largestIndex === 0 ? 1 : 0;
  for (let i = 2; i < nums.length; i++) {
    if (nums[largestIndex] < nums[i]) {
      secondLargestIndex = largestIndex;
      largestIndex = i;
    } else if (nums[secondLargestIndex] < nums[i]) {
      secondLargestIndex = i;
    }
  }
  return 2 * nums[secondLargestIndex] <= nums[largestIndex] ? largestIndex : -1;
}
