/**
 * 821. Shortest Distance to a Character
 * https://leetcode.com/problems/shortest-distance-to-a-character
 */
export function shortestToChar(s: string, c: string): number[] {
  const n = s.length;
  const distances: number[] = [];

  let prevIndex = -(10 ** 5);
  let nextIndex = s.indexOf(c);
  for (let i = 0; i < n; i++) {
    const prevDistance = Math.abs(prevIndex - i);
    const nextDistance = Math.abs(nextIndex - i);
    distances.push(Math.min(prevDistance, nextDistance));
    if (nextDistance === 0) {
      prevIndex = nextIndex;
      nextIndex = s.indexOf(c, i + 1);
    }
  }

  return distances;
}
