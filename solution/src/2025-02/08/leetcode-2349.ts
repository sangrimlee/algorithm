import { Heap } from '@algorithm/lib';

/**
 * 2349. Design a Number Container System
 * https://leetcode.com/problems/design-a-number-container-system
 */
export class NumberContainers {
  private readonly container: Map<number, number>;
  private readonly heaps: Map<number, Heap<number>>;
  constructor() {
    this.container = new Map();
    this.heaps = new Map();
  }

  private getHeap(num: number): Heap<number> {
    const heap = this.heaps.get(num);
    if (heap !== undefined) {
      return heap;
    }
    const newHeap = new Heap<number>((a, b) => a - b);
    this.heaps.set(num, newHeap);
    return newHeap;
  }

  change(index: number, num: number): void {
    const prevNum = this.container.get(index);
    if (prevNum !== undefined && this.heaps.has(prevNum)) {
      const prevHeap = this.getHeap(prevNum);
      if (prevHeap.peek === index) {
        prevHeap.pop();
      }
    }
    const pq = this.getHeap(num);
    pq.push(index);
    this.container.set(index, num);
  }

  find(num: number) {
    if (!this.heaps.has(num)) {
      return -1;
    }

    const heap = this.getHeap(num);
    while (!heap.isEmpty) {
      if (heap.peek !== undefined && this.container.get(heap.peek) === num) {
        return heap.peek;
      }
      heap.pop();
    }
    return -1;
  }
}
