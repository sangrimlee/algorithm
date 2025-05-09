/**
 * 630. Course Schedule III
 * https://leetcode.com/problems/course-schedule-iii/
 */

class Heap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  get length() {
    return this.heap.length;
  }

  get peek(): number {
    return this.heap[0] || 0;
  }

  get isEmpty() {
    return this.length === 0;
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

  pop(): number {
    if (this.length <= 1) {
      return this.heap.pop() ?? 0;
    }
    const result = this.peek;
    this.swap(0, this.length - 1);
    this.heap.pop();
    this.shiftDown();
    return result;
  }
}

export function scheduleCourse(courses: [number, number][]): number {
  let current = 0;
  const heap = new Heap();

  courses.sort((a, b) => a[1] - b[1]);
  courses.forEach(([duration, lastDay]) => {
    if (current + duration <= lastDay) {
      heap.push(-duration);
      current += duration;
    } else if (!heap.isEmpty && duration < -heap.peek) {
      current += duration + heap.pop();
      heap.push(-duration);
    }
  });

  return heap.length;
}
