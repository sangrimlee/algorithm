/**
 * 2285. Maximum Total Importance of Roads
 * https://leetcode.com/problems/maximum-total-importance-of-roads
 */
export function maximumImportance(n: number, roads: number[][]): number {
  const degrees = new Array<number>(n).fill(0);
  for (const [a, b] of roads) {
    degrees[a] += 1;
    degrees[b] += 1;
  }

  return degrees.sort((a, b) => a - b).reduce((acc, degree, i) => acc + degree * (i + 1), 0);
}
