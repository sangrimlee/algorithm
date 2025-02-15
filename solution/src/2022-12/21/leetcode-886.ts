import { range } from '@algorithm/lib';

/**
 * 886. Possible Bipartition
 * https://leetcode.com/problems/possible-bipartition
 */
export function possibleBipartition(n: number, dislikes: number[][]): boolean {
  const colors: number[] = new Array<number>(n + 1).fill(0); // 0: None, 1 or -1
  const graph: number[][] = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of dislikes) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const bfs = (startNode: number) => {
    let currentNodes = [startNode];
    colors[startNode] = 1;
    while (0 < currentNodes.length) {
      const nextNodes: number[] = [];
      for (const node of currentNodes) {
        for (const neighbor of graph[node]) {
          if (colors[node] === colors[neighbor]) {
            return false;
          }
          if (colors[neighbor] === 0) {
            colors[neighbor] = -colors[node];
            nextNodes.push(neighbor);
          }
        }
        currentNodes = nextNodes;
      }
    }
    return true;
  };

  for (const node of range(1, n + 1)) {
    if (colors[node] === 0 && !bfs(node)) {
      return false;
    }
  }

  return true;
}
