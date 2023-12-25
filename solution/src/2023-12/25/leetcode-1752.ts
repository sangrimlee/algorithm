/**
 * 1752. Check if Array Is Sorted and Rotated
 * https://leetcode.com/problems/check-if-array-is-sorted-and-rotated
 */
export function check(nums: number[]): boolean {
  const n = nums.length;

  let maxLength = 0;
  let currentLength = 1;
  for (let i = 0; i < n * 2 - 1; i++) {
    if (nums[i % n] <= nums[(i + 1) % n]) {
      currentLength += 1;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
    }
  }
  maxLength = Math.max(maxLength, currentLength);
  return n <= maxLength;
}
