/**
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 */

// Do not return anything, modify nums1 in-place instead.
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let [mIndex, nIndex, total] = [m - 1, n - 1, m + n - 1];
  while (0 <= mIndex && 0 <= nIndex) {
    nums1[total--] =
      nums2[nIndex] < nums1[mIndex] ? nums1[mIndex--] : nums2[nIndex--];
  }
  while (0 <= nIndex) {
    nums1[total--] = nums2[nIndex--];
  }
}
