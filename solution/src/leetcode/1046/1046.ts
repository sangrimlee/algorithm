import { Heap } from '@algorithm/lib';

/**
 * 1046. Last Stone Weight
 * https://leetcode.com/problems/last-stone-weight
 */
export function lastStoneWeight(stones: number[]): number {
  const heap = new Heap<number>((a, b) => b - a);
  for (const stone of stones) {
    heap.push(stone);
  }

  while (1 < heap.length) {
    const [stone1, stone2] = [heap.pop(), heap.pop()];
    if (stone1 && stone2 && stone1 !== stone2) {
      heap.push(stone1 - stone2);
    }
  }

  return heap.pop() ?? 0;
}
