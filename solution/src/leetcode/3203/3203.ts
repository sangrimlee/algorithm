/**
 * 3203. Find Minimum Diameter After Merging Two Trees
 * https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees
 */
export function minimumDiameterAfterMerge(edges1: number[][], edges2: number[][]): number {
  const [n, m] = [edges1.length + 1, edges2.length + 1];
  const graph1 = createGraph(n, edges1);
  const graph2 = createGraph(m, edges2);
  const diameter1 = findDiameter(n, graph1);
  const diameter2 = findDiameter(m, graph2);
  const combinedDiameter = Math.ceil(diameter1 / 2) + Math.ceil(diameter2 / 2) + 1;
  return Math.max(diameter1, diameter2, combinedDiameter);
}

function createGraph(n: number, edges: number[][]): number[][] {
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function findDiameter(n: number, graph: number[][]): number {
  let queue: number[] = [];
  const degrees: number[] = new Array<number>(n).fill(0);
  for (let node = 0; node < n; node++) {
    degrees[node] = graph[node].length;
    if (degrees[node] === 1) {
      queue.push(node);
    }
  }

  let remain = n;
  let depth = 0;
  while (2 < remain) {
    remain -= queue.length;
    const nextQueue: number[] = [];
    for (const node of queue) {
      for (const neighborNode of graph[node]) {
        degrees[neighborNode] -= 1;
        if (degrees[neighborNode] === 1) {
          nextQueue.push(neighborNode);
        }
      }
    }
    queue = nextQueue;
    depth += 1;
  }

  return remain === 2 ? depth * 2 + 1 : depth * 2;
}
