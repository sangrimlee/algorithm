/**
 * 1828. Queries on Number of Points Inside a Circle
 * https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle
 */
export function countPoints(points: number[][], queries: number[][]): number[] {
  const answer = new Array(queries.length).fill(0);
  function getDistance(x1: number, y1: number, x2: number, y2: number): number {
    return (x1 - x2) ** 2 + (y1 - y2) ** 2;
  }

  queries.forEach(([qx, qy, r], i) => {
    points.forEach(([px, py]) => {
      if (getDistance(qx, qy, px, py) <= r ** 2) {
        answer[i] += 1;
      }
    });
  });

  return answer;
}
