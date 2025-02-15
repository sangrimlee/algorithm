/**
 * 950. Reveal Cards In Increasing Order
 * https://leetcode.com/problems/reveal-cards-in-increasing-order
 */
export function deckRevealedIncreasing(deck: number[]): number[] {
  deck.sort((a, b) => b - a);
  const queue: number[] = [];
  deck.forEach((card) => {
    if (0 < queue.length) {
      const value = queue.shift();
      if (value !== undefined) {
        queue.push(value);
      }
    }
    queue.push(card);
  });
  return queue.reverse();
}
