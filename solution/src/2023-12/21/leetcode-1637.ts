/**
 * 1637. Widest Vertical Area Between Two Points Containing No Points
 * https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points
 */
export function maxWidthOfVerticalArea(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);

  let maxWidth = 0;
  for (let i = 1; i < points.length; i++) {
    const width = points[i][0] - points[i - 1][0];
    maxWidth = Math.max(width, maxWidth);
  }
  return maxWidth;
}
