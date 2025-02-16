import { Heap } from '@algorithm/lib';

/**
 * 3066. Minimum Operations to Exceed Threshold Value II
 * https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii
 */
export function minOperations(nums: number[], k: number): number {
  const heap = new Heap<number>((a, b) => a - b);
  nums.forEach((num) => {
    heap.push(num);
  });

  let operation = 0;
  while (1 < heap.length && heap.peek !== undefined && heap.peek < k) {
    const x = heap.pop() ?? 0;
    const y = heap.pop() ?? 0;
    heap.push(2 * x + y);
    operation += 1;
  }
  return operation;
}
