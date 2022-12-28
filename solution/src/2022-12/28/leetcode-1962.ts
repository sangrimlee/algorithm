import { Heap } from '@1d1s/lib';

/**
 * 1962. Remove Stones to Minimize the Total
 * https://leetcode.com/problems/remove-stones-to-minimize-the-total
 */
export function minStoneSum(piles: number[], k: number): number {
  const heap = new Heap<number>((a, b) => b - a);
  for (const pile of piles) {
    heap.push(pile);
  }

  for (let i = 0; i < k; i++) {
    const pile = heap.pop();
    if (pile !== undefined) {
      heap.push(pile - Math.floor(pile / 2));
    }
  }

  return heap.heap.reduce((total, curr) => total + curr, 0);
}
