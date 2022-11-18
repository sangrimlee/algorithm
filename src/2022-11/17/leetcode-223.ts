/**
 * 223. Rectangle Area
 * https://leetcode.com/problems/rectangle-area/
 */
export function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): number {
  const areaOfA = (ay2 - ay1) * (ax2 - ax1);
  const areaOfB = (by2 - by1) * (bx2 - bx1);

  const xOverlap = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  const yOverlap = Math.min(ay2, by2) - Math.max(ay1, by1);

  if (0 < xOverlap && 0 < xOverlap) {
    return areaOfA + areaOfB - xOverlap * yOverlap;
  }
  return areaOfA + areaOfB;
}
