import { Heap } from '@algorithm/lib';

/**
 * 3264. Final Array State After K Multiplication Operations I
 * https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/
 */
export function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  const heap = new Heap<[number, number]>((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  nums.forEach((num, i) => {
    heap.push([num, i]);
  });

  while (0 < k) {
    const [minValue, minIndex] = heap.pop()!;
    nums[minIndex] = minValue * multiplier;
    heap.push([minValue * multiplier, minIndex]);
    k -= 1;
  }
  return nums;
}
