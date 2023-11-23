/**
 * 1266. Minimum Time Visiting All Points
 * https://leetcode.com/problems/minimum-time-visiting-all-points
 */
export function minTimeToVisitAllPoints(points: number[][]): number {
  const minVisitTime = ([x1, y1]: number[], [x2, y2]: number[]) => {
    return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
  };

  const n = points.length;
  let answer = 0;
  for (let i = 0; i < n - 1; i++) {
    answer += minVisitTime(points[i], points[i + 1]);
  }
  return answer;
}
