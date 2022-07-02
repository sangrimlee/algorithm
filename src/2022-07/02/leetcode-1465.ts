/**
 * 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 * https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
 */
export function maxArea(
  h: number,
  w: number,
  horizontalCuts: number[],
  verticalCuts: number[]
): number {
  const MOD = BigInt(10 ** 9 + 7);
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  const getMaxBetweenArea = (
    [maxBetweenArea, prev]: [number, number],
    curr: number
  ): [number, number] => {
    return [Math.max(maxBetweenArea, curr - prev), curr];
  };

  const [maxHorizontalBetweenArea] = [...horizontalCuts, h].reduce(
    getMaxBetweenArea,
    [0, 0]
  );
  const [maxVerticalBetweenArea] = [...verticalCuts, w].reduce(
    getMaxBetweenArea,
    [0, 0]
  );

  return Number(
    (BigInt(maxHorizontalBetweenArea) * BigInt(maxVerticalBetweenArea)) % MOD
  );
}
