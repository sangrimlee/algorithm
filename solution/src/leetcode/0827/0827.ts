/**
 * 827. Making A Large Island
 * https://leetcode.com/problems/making-a-large-island
 */
export function largestIsland(grid: number[][]): number {
  const n = grid.length;
  const disjointSet = new DisjointSet(n * n);
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let hasZero = false;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 1) {
        const node = n * y + x;
        for (const [dy, dx] of directions) {
          const [ny, nx] = [y + dy, x + dx];
          if (0 <= ny && ny < n && 0 <= nx && nx < n && grid[ny][nx] === 1) {
            const neighborNode = n * ny + nx;
            disjointSet.union(node, neighborNode);
          }
        }
      } else {
        hasZero = true;
      }
    }
  }
  if (!hasZero) {
    return n * n;
  }

  let maxIslandSize = 0;
  const rootNodes = new Set<number>();
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 1) continue;

      let islandSize = 1;
      for (const [dy, dx] of directions) {
        const [ny, nx] = [y + dy, x + dx];
        if (0 <= ny && ny < n && 0 <= nx && nx < n && grid[ny][nx] === 1) {
          const neighborNode = n * ny + nx;
          const rootNode = disjointSet.find(neighborNode);
          rootNodes.add(rootNode);
        }
      }
      for (const rootNode of rootNodes) {
        islandSize += disjointSet.getSize(rootNode);
      }
      maxIslandSize = Math.max(maxIslandSize, islandSize);
      rootNodes.clear();
    }
  }
  return maxIslandSize;
}

class DisjointSet {
  private readonly parent: number[];
  private readonly size: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array<number>(n).fill(1);
  }

  find(node: number): number {
    if (this.parent[node] === node) {
      return node;
    }
    this.parent[node] = this.find(this.parent[node]);
    return this.parent[node];
  }

  union(node1: number, node2: number): void {
    const parent1 = this.find(node1);
    const parent2 = this.find(node2);
    if (parent1 === parent2) {
      return;
    }
    if (this.size[parent1] < this.size[parent2]) {
      this.parent[parent1] = parent2;
      this.size[parent2] += this.size[parent1];
    } else {
      this.parent[parent2] = parent1;
      this.size[parent1] += this.size[parent2];
    }
  }

  getSize(node: number) {
    return this.size[node];
  }
}
