import { Heap } from '@algorithm/lib';

/**
 * 2558. Take Gifts From the Richest Pile
 * https://leetcode.com/problems/take-gifts-from-the-richest-pile
 */
export function pickGifts(gifts: number[], k: number): number {
  const heap = new Heap<number>((a, b) => b - a);
  gifts.forEach((gift) => heap.push(gift));

  for (let i = 0; i < k; i++) {
    const gift = heap.pop()!;
    heap.push(Math.floor(Math.sqrt(gift)));
  }

  let answer = 0;
  while (!heap.isEmpty) {
    answer += heap.pop()!;
  }
  return answer;
}
