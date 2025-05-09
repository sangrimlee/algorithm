/**
 * 1642. Furthest Building You Can Reach
 * https://leetcode.com/problems/furthest-building-you-can-reach/
 */

export function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  const heap = new Heap();
  for (let currentIndex = 0; currentIndex < heights.length - 1; currentIndex++) {
    const heightDiff = heights[currentIndex + 1] - heights[currentIndex];
    if (0 < heightDiff) {
      heap.push(heightDiff);
    }
    if (ladders < heap.length) {
      bricks -= heap.pop() ?? 0;
    }
    if (bricks < 0) {
      return currentIndex;
    }
  }
  return heights.length - 1;
}

class Heap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  get length() {
    return this.heap.length;
  }

  get peek(): number | undefined {
    return this.heap[0];
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  private parentIndex(index: number): number {
    return (index - 1) >> 1;
  }

  private leftIndex(index: number): number {
    return (index << 1) + 1;
  }

  private rightIndex(index: number): number {
    return (index << 1) + 2;
  }

  private shiftDown(): void {
    let currentIndex = 0;
    while (this.leftIndex(currentIndex) < this.length) {
      const leftIndex = this.leftIndex(currentIndex);
      const rightIndex = this.rightIndex(currentIndex);
      const childIndex =
        rightIndex < this.length && this.heap[rightIndex] < this.heap[leftIndex]
          ? rightIndex
          : leftIndex;
      if (this.heap[currentIndex] <= this.heap[childIndex]) {
        return;
      }
      this.swap(currentIndex, childIndex);
      currentIndex = childIndex;
    }
  }

  private shiftUp(): void {
    let currentIndex = this.length - 1;
    while (0 < currentIndex) {
      const parentIndex = this.parentIndex(currentIndex);
      if (this.heap[parentIndex] <= this.heap[currentIndex]) {
        return;
      }
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  push(item: number): void {
    this.heap.push(item);
    this.shiftUp();
  }

  pop(): number | undefined {
    if (this.length <= 1) {
      return this.heap.pop();
    }
    const result = this.peek;
    this.swap(0, this.length - 1);
    this.heap.pop();
    this.shiftDown();
    return result;
  }
}

/* DFS(Time Limit Exceeded)
function furthestBuilding(
  heights: number[],
  bricks: number,
  ladders: number
): number {
  function dfs(
    currentIndex: number,
    currentBricks: number,
    currentLadders: number
  ): number {
    if (currentBricks < 0 || currentLadders < 0) {
      return -1;
    }
    if (currentIndex === heights.length - 1) {
      return currentIndex;
    }
    const heightDiff = heights[currentIndex + 1] - heights[currentIndex];
    if (heightDiff <= 0) {
      return dfs(currentIndex + 1, currentBricks, currentLadders);
    }
    return Math.max(
      currentIndex,
      dfs(currentIndex + 1, currentBricks - heightDiff, currentLadders),
      dfs(currentIndex + 1, currentBricks, currentLadders - 1)
    );
  }

  return dfs(0, bricks, ladders);
}
*/
