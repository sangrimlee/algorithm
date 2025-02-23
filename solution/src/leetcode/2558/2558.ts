import { Heap } from '@algorithm/lib';

/**
 * 2558. Take Gifts From the Richest Pile
 * https://leetcode.com/problems/take-gifts-from-the-richest-pile
 */
export function pickGifts(gifts: number[], k: number): number {
  const heap = new Heap<number>((a, b) => b - a);
  gifts.forEach((gift) => {
    heap.push(gift);
  });

  for (let i = 0; i < k; i++) {
    const gift = heap.pop();
    if (gift !== undefined) {
      heap.push(Math.floor(Math.sqrt(gift)));
    }
  }

  let answer = 0;
  while (!heap.isEmpty) {
    const gift = heap.pop();
    if (gift !== undefined) {
      answer += gift;
    }
  }
  return answer;
}
