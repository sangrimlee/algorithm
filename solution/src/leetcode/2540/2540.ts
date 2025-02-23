/**
 * 2540. Minimum Common Value
 * https://leetcode.com/problems/minimum-common-value
 */
export function getCommon(nums1: number[], nums2: number[]): number {
  const [m, n] = [nums1.length, nums2.length];

  let [i, j] = [0, 0];
  while (i < m && j < n) {
    if (nums1[i] === nums2[j]) {
      return nums1[i];
    } else if (nums1[i] < nums2[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return -1;
}
