/**
 * 950. Reveal Cards In Increasing Order
 * https://leetcode.com/problems/reveal-cards-in-increasing-order
 */
export function deckRevealedIncreasing(deck: number[]): number[] {
  deck.sort((a, b) => b - a);
  const queue: number[] = [];
  deck.forEach((card) => {
    if (0 < queue.length) {
      queue.push(queue.shift()!);
    }
    queue.push(card);
  });
  return queue.reverse();
}
