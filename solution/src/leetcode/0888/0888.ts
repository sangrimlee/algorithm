/**
 * 888. Fair Candy Swap
 * https://leetcode.com/problems/fair-candy-swap
 */
export function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const totalAliceSize = aliceSizes.reduce((acc, size) => acc + size, 0);
  const totalBobSize = bobSizes.reduce((acc, size) => acc + size, 0);

  const difference = (totalAliceSize - totalBobSize) / 2;
  const bobSizeSet = new Set(bobSizes);

  for (const aliceSize of aliceSizes) {
    const bobSize = aliceSize - difference;
    if (bobSizeSet.has(bobSize)) {
      return [aliceSize, bobSize];
    }
  }
  return [-1, -1];
}
