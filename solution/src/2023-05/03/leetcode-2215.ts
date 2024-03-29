/**
 * 2215. Find the Difference of Two Arrays
 * https://leetcode.com/problems/find-the-difference-of-two-arrays
 */
export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const difference = (set1: Set<number>, set2: Set<number>) =>
    [...set1].filter((num) => !set2.has(num));

  return [difference(set1, set2), difference(set2, set1)];
}
