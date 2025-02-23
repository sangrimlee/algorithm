/**
 * 1725. Number Of Rectangles That Can Form The Largest Square
 * https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square
 */
export function countGoodRectangles(rectangles: number[][]): number {
  let maxLen = 0;
  let maxCount = 0;
  for (const [l, w] of rectangles) {
    const sideLen = Math.min(l, w);
    if (maxLen < sideLen) {
      [maxCount, maxLen] = [1, sideLen];
    } else if (maxLen === sideLen) {
      maxCount += 1;
    }
  }
  return maxCount;
}
