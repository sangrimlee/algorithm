import { Heap } from '@algorithm/lib';

/**
 * 2642. Design Graph With Shortest Path Calculator
 * https://leetcode.com/problems/design-graph-with-shortest-path-calculator
 */
export class Graph {
  private readonly graph: [number, number][][];

  constructor(n: number, edges: number[][]) {
    this.graph = new Array(n).fill(undefined).map(() => []);
    for (const edge of edges) {
      this.addEdge(edge);
    }
  }

  addEdge([from, to, cost]: number[]): void {
    this.graph[from].push([to, cost]);
  }

  shortestPath(node1: number, node2: number): number {
    const heap = new Heap<[number, number]>((a, b) => a[1] - b[1]);
    const costs = new Array(this.graph.length).fill(Number.MAX_SAFE_INTEGER);
    costs[node1] = 0;
    heap.push([node1, 0]);

    while (!heap.isEmpty) {
      const peek = heap.pop();
      if (peek === undefined) {
        break;
      }
      const [node, cost] = peek;
      if (node === node2) {
        return cost;
      }
      if (costs[node] < cost) {
        continue;
      }
      for (const [nextNode, nextCost] of this.graph[node]) {
        if (cost + nextCost < costs[nextNode]) {
          costs[nextNode] = cost + nextCost;
          heap.push([nextNode, cost + nextCost]);
        }
      }
    }
    return -1;
  }
}
