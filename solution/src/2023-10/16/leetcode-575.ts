/**
 * 575. Distribute Candies
 * https://leetcode.com/problems/distribute-candies
 */
export function distributeCandies(candyType: number[]): number {
  return Math.min(new Set(candyType).size, candyType.length / 2);
}
