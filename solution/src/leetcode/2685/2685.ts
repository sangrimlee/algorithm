/**
 * 2685. Count the Number of Complete Components
 * https://leetcode.com/problems/count-the-number-of-complete-components
 */
export function countCompleteComponents(n: number, edges: number[][]): number {
  // Union-Find를 사용한 각 노드를 연결 요소로 그룹화
  const unionFind = new UnionFind(n);
  for (const [a, b] of edges) {
    unionFind.union(a, b);
  }

  // 각 연결 요소에 대한 간선의 개수 저장
  const edgeCounts = new Map<number, number>();
  for (const [node] of edges) {
    const parentNode = unionFind.find(node);
    edgeCounts.set(parentNode, (edgeCounts.get(parentNode) ?? 0) + 1);
  }

  let answer = 0;
  for (let node = 0; node < n; node++) {
    const parentNode = unionFind.find(node);
    if (node !== parentNode) {
      continue;
    }
    // 각 연결 요소의 개수와 간선의 개수를 비교하여, 완전 연결 요소인지 여부를 확인
    const nodeSize = unionFind.sizes[node];
    const edgeCount = edgeCounts.get(node) ?? 0;
    const totalEdgeCount = (nodeSize * (nodeSize - 1)) / 2;
    if (edgeCount === totalEdgeCount) {
      answer += 1;
    }
  }
  return answer;
}

class UnionFind {
  public readonly sizes: number[];
  private readonly parents: number[];

  constructor(n: number) {
    this.sizes = new Array<number>(n).fill(1);
    this.parents = Array.from({ length: n }, (_, i) => i);
  }

  find(x: number): number {
    if (this.parents[x] !== x) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }

  union(x: number, y: number): void {
    const parentX = this.find(x);
    const parentY = this.find(y);
    if (parentX === parentY) return;

    if (this.sizes[parentX] > this.sizes[parentY]) {
      this.parents[parentY] = parentX;
      this.sizes[parentX] += this.sizes[parentY];
    } else {
      this.parents[parentX] = parentY;
      this.sizes[parentY] += this.sizes[parentX];
    }
  }
}
