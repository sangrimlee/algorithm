/**
 * 3131. Find the Integer Added to Array I
 * https://leetcode.com/problems/find-the-integer-added-to-array-i
 */
export function addedInteger(nums1: number[], nums2: number[]): number {
  return min(nums2) - min(nums1);
}

function min(arr: number[]) {
  return arr.reduce((prev, num) => (prev < num ? prev : num), Number.MAX_SAFE_INTEGER);
}
