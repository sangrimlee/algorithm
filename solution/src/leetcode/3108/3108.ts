/**
 * 3108. Minimum Cost Walk in Weighted Graph
 * https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph
 */
export function minimumCost(n: number, edges: number[][], query: number[][]): number[] {
  const unionFind = new UnionFind(n);
  for (const [u, v, w] of edges) {
    unionFind.union(u, v, w);
  }

  const result: number[] = [];
  for (const [s, t] of query) {
    if (!unionFind.isUnion(s, t)) {
      result.push(-1);
    } else {
      result.push(unionFind.getCost(s));
    }
  }
  return result;
}

class UnionFind {
  private readonly costs: number[];
  private readonly parents: number[];

  constructor(n: number) {
    this.costs = new Array<number>(n).fill(Number.MAX_SAFE_INTEGER);
    this.parents = Array.from({ length: n }, (_, i) => i);
  }

  find(x: number): number {
    if (this.parents[x] !== x) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }

  union(x: number, y: number, w: number): void {
    const parentX = this.find(x);
    const parentY = this.find(y);
    const costX = this.getCost(x);
    const costY = this.getCost(y);

    this.parents[parentY] = parentX;
    this.costs[parentX] = costX & costY & w;
  }

  isUnion(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }

  getCost(x: number): number {
    return this.costs[this.find(x)];
  }
}
