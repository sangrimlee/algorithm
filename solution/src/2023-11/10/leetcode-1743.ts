/**
 * 1743. Restore the Array From Adjacent Pairs
 * https://leetcode.com/problems/restore-the-array-from-adjacent-pairs
 */
class Graph {
  private readonly graph: Map<number, number[]>;
  constructor() {
    this.graph = new Map();
  }

  get(node: number): number[] {
    return this.graph.get(node) ?? [];
  }

  add(node: number, neighbor: number): void {
    const neighbors = this.get(node);
    neighbors.push(neighbor);
    this.graph.set(node, neighbors);
  }

  get root(): number {
    for (const [node, neighbors] of this.graph.entries()) {
      if (neighbors.length === 1) {
        return node;
      }
    }
    throw new Error('There is no root node.');
  }
}

export function restoreArray(adjacentPairs: number[][]): number[] {
  const graph = new Graph();
  for (const [u, v] of adjacentPairs) {
    graph.add(u, v);
    graph.add(v, u);
  }

  const answer: number[] = [];
  const dfs = (node: number, prev?: number) => {
    answer.push(node);
    for (const neighbor of graph.get(node)) {
      if (prev !== neighbor) {
        dfs(neighbor, node);
      }
    }
  };
  dfs(graph.root);
  return answer;
}
