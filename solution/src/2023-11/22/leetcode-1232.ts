/**
 * 1232. Check If It Is a Straight Line
 * https://leetcode.com/problems/check-if-it-is-a-straight-line
 */
export function checkStraightLine(coordinates: number[][]): boolean {
  const n = coordinates.length;
  const [x, y] = coordinates[0];
  const isStraight = ([x1, y1]: number[], [x2, y2]: number[]) => {
    return (y1 - y) * (x2 - x) === (y2 - y) * (x1 - x);
  };

  for (let i = 1; i < n - 1; i++) {
    if (!isStraight(coordinates[i], coordinates[i + 1])) {
      return false;
    }
  }
  return true;
}
