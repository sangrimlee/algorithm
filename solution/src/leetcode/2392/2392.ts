/**
 * 2392. Build a Matrix With Conditions
 * https://leetcode.com/problems/build-a-matrix-with-conditions
 */
export function buildMatrix(
  k: number,
  rowConditions: number[][],
  colConditions: number[][],
): number[][] {
  const rowOrder = topologicalSort(k, rowConditions);
  const colOrder = topologicalSort(k, colConditions);
  if (rowOrder.length !== k || colOrder.length !== k) {
    return [];
  }

  const matrix = Array.from({ length: k }, () => new Array<number>(k).fill(0));

  const colRank = new Array<number>(k).fill(0);
  colOrder.forEach((col, i) => {
    colRank[col] = i;
  });
  rowOrder.forEach((row, i) => {
    matrix[i][colRank[row]] = row + 1;
  });
  return matrix;
}

function topologicalSort(k: number, edges: number[][]) {
  const indegrees: number[] = new Array<number>(k).fill(0);
  const graph: number[][] = Array.from({ length: k }, () => []);
  for (const [start, end] of edges) {
    indegrees[end - 1] += 1;
    graph[start - 1].push(end - 1);
  }

  const result: number[] = [];
  let queue: number[] = [];
  indegrees.forEach((indegree, node) => {
    if (indegree === 0) {
      queue.push(node);
    }
  });
  while (0 < queue.length) {
    const nextQueue: number[] = [];
    for (const node of queue) {
      result.push(node);
      for (const nextNode of graph[node]) {
        indegrees[nextNode] -= 1;
        if (indegrees[nextNode] === 0) {
          nextQueue.push(nextNode);
        }
      }
    }
    queue = nextQueue;
  }
  return result;
}
