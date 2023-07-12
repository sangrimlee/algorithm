import { range } from '@algorithm/lib';

/**
 * 802. Find Eventual Safe States
 * https://leetcode.com/problems/find-eventual-safe-states
 */
export function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length;
  const visited = new Array<boolean>(n).fill(false);
  const inStack = new Array<boolean>(n).fill(false);

  const dfs = (node: number): boolean => {
    if (inStack[node]) {
      return true;
    }
    if (visited[node]) {
      return false;
    }
    visited[node] = true;
    inStack[node] = true;
    for (const neighbor of graph[node]) {
      if (dfs(neighbor)) {
        return true;
      }
    }
    inStack[node] = false;
    return false;
  };

  for (const node of range(n)) {
    dfs(node);
  }

  return [...range(n)].filter((node) => !inStack[node]);
}
