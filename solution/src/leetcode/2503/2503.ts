/**
 * 2503. Maximum Number of Points From Grid Queries
 * https://leetcode.com/problems/maximum-number-of-points-from-grid-queries
 */
export function maxPoints(grid: number[][], queries: number[]): number[] {
  const [m, n, k] = [grid.length, grid[0].length, queries.length];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const sortedQueries = queries.map((query, i) => [query, i]).sort((a, b) => a[0] - b[0]);
  const sortedCells = grid
    .flat()
    .map((value, i) => [value, Math.floor(i / n), i % n])
    .sort((a, b) => a[0] - b[0]);

  const unionFind = new UnionFind(m * n);
  const result = new Array<number>(k).fill(0);

  let cellIndex = 0;
  for (const [query, queryIndex] of sortedQueries) {
    while (cellIndex < m * n && sortedCells[cellIndex][0] < query) {
      const [_, y, x] = sortedCells[cellIndex];
      const cellId = y * n + x;

      for (const [dy, dx] of directions) {
        const [ny, nx] = [y + dy, x + dx];
        if (0 <= ny && ny < m && 0 <= nx && nx < n && grid[ny][nx] < query) {
          unionFind.union(cellId, ny * n + nx);
        }
      }
      cellIndex += 1;
    }
    result[queryIndex] = query > grid[0][0] ? unionFind.getSize(0) : 0;
  }

  return result;
}

class UnionFind {
  private readonly parents: number[];
  private readonly sizes: number[];
  constructor(n: number) {
    this.parents = Array.from({ length: n }, (_, i) => i);
    this.sizes = new Array<number>(n).fill(1);
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
    if (parentX === parentY) {
      return;
    }
    if (this.sizes[parentX] > this.sizes[parentY]) {
      this.parents[parentY] = parentX;
      this.sizes[parentX] += this.sizes[parentY];
    } else {
      this.parents[parentX] = parentY;
      this.sizes[parentY] += this.sizes[parentX];
    }
  }

  getSize(x: number): number {
    return this.sizes[this.find(x)];
  }
}
