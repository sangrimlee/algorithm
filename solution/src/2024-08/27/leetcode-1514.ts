import { Heap } from '@algorithm/lib';

/**
 * 1514. Path with Maximum Probability
 * https://leetcode.com/problems/path-with-maximum-probability
 */
export function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start: number,
  end: number,
): number {
  const graph: [number, number][][] = Array.from({ length: n }, () => []);
  edges.forEach(([u, v], i) => {
    graph[u].push([succProb[i], v]);
    graph[v].push([succProb[i], u]);
  });

  const heap = new Heap<[number, number]>(([a], [b]) => b - a);
  heap.push([1, start]);

  const probs = new Array(n).fill(0);
  probs[start] = 1;
  while (!heap.isEmpty) {
    const [prob, node] = heap.pop()!;
    if (node === end) {
      return prob;
    }
    for (const [nextProb, nextNode] of graph[node]) {
      const totalProb = prob * nextProb;
      if (probs[nextNode] < totalProb) {
        probs[nextNode] = totalProb;
        heap.push([totalProb, nextNode]);
      }
    }
  }
  return 0;
}
