/**
 * 1779. Find Nearest Point That Has the Same X or Y Coordinate
 * https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate
 */
export function nearestValidPoint(x: number, y: number, points: number[][]): number {
  function getDistance(x1: number, y1: number, x2: number, y2: number) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  let answer = -1;
  let minDistance = Number.MAX_SAFE_INTEGER;
  points.forEach(([x2, y2], i) => {
    if (x !== x2 && y !== y2) return;
    const distance = getDistance(x, y, x2, y2);
    if (distance < minDistance) {
      answer = i;
      minDistance = distance;
    }
  });
  return answer;
}
