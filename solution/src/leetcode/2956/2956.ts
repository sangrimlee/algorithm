/**
 * 2956. Find Common Elements Between Two Arrays
 * https://leetcode.com/problems/find-common-elements-between-two-arrays
 */
export function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [nums1.filter((num) => set2.has(num)).length, nums2.filter((num) => set1.has(num)).length];
}
