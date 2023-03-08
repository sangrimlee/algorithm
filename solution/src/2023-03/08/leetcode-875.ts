/**
 * 875. Koko Eating Bananas
 * https://leetcode.com/problems/koko-eating-bananas
 */
export function minEatingSpeed(piles: number[], h: number): number {
  const maxPile = piles.reduce((prev, curr) => Math.max(prev, curr), Number.MIN_SAFE_INTEGER);

  const isFeasible = (speed: number) =>
    piles.reduce((prev, pile) => prev + Math.ceil(pile / speed), 0) > h;

  let [start, end] = [1, maxPile];
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (isFeasible(mid)) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}
