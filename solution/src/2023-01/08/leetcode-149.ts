import { range } from '@algorithm/lib';

/**
 * 149. Max Points on a Line
 * https://leetcode.com/problems/max-points-on-a-line
 */
export function maxPoints(points: number[][]): number {
  const n = points.length;

  if (n === 1) {
    return 1;
  }

  let maxCount = 2;
  for (const i of range(n)) {
    const gradientCounts = new Map<number, number>();
    for (const j of range(n)) {
      if (i !== j) {
        const gradient = Math.atan2(points[j][1] - points[i][1], points[j][0] - points[i][0]);
        gradientCounts.set(gradient, (gradientCounts.get(gradient) ?? 0) + 1);
      }
    }
    const maxGradientCount = Math.max(...gradientCounts.values());
    maxCount = Math.max(maxCount, maxGradientCount + 1);
  }
  return maxCount;
}
