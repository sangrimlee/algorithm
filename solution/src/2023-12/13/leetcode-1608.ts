/**
 * 1608. Special Array With X Elements Greater Than or Equal X
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x
 */
export function specialArray(nums: number[]): number {
  nums.sort((a, b) => b - a);
  const n = nums.length;
  let [start, end] = [0, n];
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    if (mid < nums[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start !== nums[start] ? start : -1;
}
