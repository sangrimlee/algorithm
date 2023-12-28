/**
 * 1791. Find Center of Star Graph
 * https://leetcode.com/problems/find-center-of-star-graph
 */
export function findCenter(edges: number[][]): number {
  return edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] ? edges[0][0] : edges[0][1];
}
