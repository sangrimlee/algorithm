/**
 * 2605. Form Smallest Number From Two Digit Arrays
 * https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays
 */
export function minNumber(nums1: number[], nums2: number[]): number {
  const min1 = min(nums1);
  const min2 = min(nums2);
  const intersection = intersect(new Set(nums1), new Set(nums2));
  if (intersection.length === 0) {
    return Math.min(min1, min2) * 10 + Math.max(min1, min2);
  }
  return min(intersection);
}

function min(nums: number[]) {
  return nums.reduce((prev, num) => (prev < num ? prev : num), Number.MAX_SAFE_INTEGER);
}

function intersect(set1: Set<number>, set2: Set<number>) {
  return [...set1].filter((num) => set2.has(num));
}
