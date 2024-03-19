/**
 * 2570. Merge Two 2D Arrays by Summing Values
 * https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values
 */
export function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const map = new Map<number, number>();
  function addNumber([id, val]: number[]) {
    map.set(id, (map.get(id) ?? 0) + val);
  }
  nums1.forEach(addNumber);
  nums2.forEach(addNumber);
  return Array.from(map).sort(([a], [b]) => a - b);
}
