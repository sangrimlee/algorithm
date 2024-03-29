/**
 * 452. Minimum Number of Arrows to Burst Balloons
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons
 */
export function findMinArrowShots(points: number[][]): number {
  points.sort(([, end1], [, end2]) => end1 - end2);

  let totalArrowShot = 0;
  let lastPoint = 0;
  for (const [startPoint, endPoint] of points) {
    if (totalArrowShot === 0 || lastPoint < startPoint) {
      totalArrowShot += 1;
      lastPoint = endPoint;
    }
  }

  return totalArrowShot;
}
