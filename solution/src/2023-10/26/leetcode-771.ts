/**
 * 771. Jewels and Stones
 * https://leetcode.com/problems/jewels-and-stones
 */
export function numJewelsInStones(jewels: string, stones: string): number {
  const jewel = new Set(jewels);
  return [...stones].filter((stone) => jewel.has(stone)).length;
}
