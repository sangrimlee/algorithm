import { range } from '@algorithm/lib';

/**
 * 2101. Detonate the Maximum Bombs
 * https://leetcode.com/problems/detonate-the-maximum-bombs
 */
export function maximumDetonation(bombs: number[][]): number {
  const n = bombs.length;
  const graph: number[][] = Array.from({ length: n }).map(() => []);

  const isInRange = ([ax, ay, ar]: number[], [bx, by]: number[]) => {
    return ar ** 2 >= (ax - bx) ** 2 + (ay - by) ** 2;
  };

  for (const i of range(n)) {
    for (const j of range(i + 1, n)) {
      if (isInRange(bombs[i], bombs[j])) {
        graph[i].push(j);
      }
      if (isInRange(bombs[j], bombs[i])) {
        graph[j].push(i);
      }
    }
  }

  const dfs = (currentNode: number, visited: Set<number>) => {
    visited.add(currentNode);
    for (const nextNode of graph[currentNode]) {
      if (!visited.has(nextNode)) {
        dfs(nextNode, visited);
      }
    }
    return visited.size;
  };

  return bombs.reduce((answer, _, i) => Math.max(answer, dfs(i, new Set())), 0);
}
