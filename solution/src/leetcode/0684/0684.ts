/**
 * 684. Redundant Connection
 * https://leetcode.com/problems/redundant-connection
 */
export function findRedundantConnection(edges: number[][]): number[] {
  const n = edges.length;
  const parents = Array.from({ length: n }, (_, i) => i);

  function find(a: number): number {
    if (a === parents[a]) {
      return a;
    }
    parents[a] = find(parents[a]);
    return parents[a];
  }

  function union(a: number, b: number): boolean {
    const parentA = find(a);
    const parentB = find(b);
    if (parentA === parentB) {
      return true;
    }
    if (parentA < parentB) {
      parents[parentB] = parentA;
    } else {
      parents[parentA] = parentB;
    }
    return false;
  }

  for (const [a, b] of edges) {
    if (union(a, b)) {
      return [a, b];
    }
  }
  return [];
}
