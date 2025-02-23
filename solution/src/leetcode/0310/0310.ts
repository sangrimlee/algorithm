/**
 * 310. Minimum Height Trees
 * https://leetcode.com/problems/minimum-height-trees
 */
export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n <= 2) {
    return Array.from({ length: n }, (_, i) => i);
  }

  const neighbors = Array.from({ length: n }, () => new Set<number>());
  for (const [start, end] of edges) {
    neighbors[start].add(end);
    neighbors[end].add(start);
  }

  let leafNodes: number[] = [];
  for (let i = 0; i < n; i++) {
    if (neighbors[i].size === 1) {
      leafNodes.push(i);
    }
  }

  let numberOfRemainNodes = n;
  while (2 < numberOfRemainNodes) {
    numberOfRemainNodes -= leafNodes.length;
    const newLeafNodes = [];
    for (const leafNode of leafNodes) {
      for (const neighbor of neighbors[leafNode]) {
        neighbors[neighbor].delete(leafNode);
        if (neighbors[neighbor].size === 1) {
          newLeafNodes.push(neighbor);
        }
      }
      leafNodes = newLeafNodes;
    }
  }
  return leafNodes;
}
