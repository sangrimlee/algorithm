/**
 * 3242. Design Neighbor Sum Service
 * https://leetcode.com/problems/design-neighbor-sum-service
 */
export class NeighborSum {
  readonly n: number;
  readonly grid: number[][];
  private readonly adjecentSums: number[];
  private readonly diagonalSums: number[];

  constructor(grid: number[][]) {
    this.n = grid.length;
    this.grid = grid;
    this.adjecentSums = new Array<number>(this.n ** 2).fill(0);
    this.diagonalSums = new Array<number>(this.n ** 2).fill(0);
    this.initSums();
  }

  private initSums() {
    const adjecents = [0, 1, 0, -1, 0];
    const diagonals = [1, 1, -1, -1, 1];
    for (let y = 0; y < this.n; y++) {
      for (let x = 0; x < this.n; x++) {
        for (let i = 0; i < 4; i++) {
          const [ay, ax] = [adjecents[i], adjecents[i + 1]];
          this.addSums(this.adjecentSums, y + ay, x + ax, this.grid[y][x]);

          const [dy, dx] = [diagonals[i], diagonals[i + 1]];
          this.addSums(this.diagonalSums, y + dy, x + dx, this.grid[y][x]);
        }
      }
    }
  }

  private addSums(sums: number[], y: number, x: number, value: number) {
    if (Math.min(y, x) < 0 || Math.max(y, x) >= this.n) {
      return;
    }
    sums[value] += this.grid[y][x];
  }

  adjacentSum(value: number): number {
    return this.adjecentSums[value];
  }

  diagonalSum(value: number): number {
    return this.diagonalSums[value];
  }
}
