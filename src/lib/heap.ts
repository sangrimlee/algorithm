type Comparator<T> = (a: T, b: T) => number;

export class Heap<T> {
  heap: T[];
  comparator: Comparator<T>;

  constructor(comparator: Comparator<T>) {
    this.heap = [];
    this.comparator = comparator;
  }

  get length() {
    return this.heap.length;
  }

  get peek(): T | undefined {
    return this.heap[0];
  }

  get isEmpty() {
    return this.length === 0;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
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

  private compare(index1: number, index2: number) {
    return this.comparator(this.heap[index1], this.heap[index2]);
  }

  private canShift(index1: number, index2: number): boolean {
    return 0 < this.compare(index1, index2);
  }

  private shiftDown(): void {
    let currentIndex = 0;
    while (this.leftIndex(currentIndex) < this.length) {
      const leftIndex = this.leftIndex(currentIndex);
      const rightIndex = this.rightIndex(currentIndex);
      const childIndex =
        rightIndex < this.length && this.compare(rightIndex, leftIndex) < 0
          ? rightIndex
          : leftIndex;
      if (!this.canShift(currentIndex, childIndex)) {
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
      if (!this.canShift(parentIndex, currentIndex)) {
        return;
      }
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  push(item: T): void {
    this.heap.push(item);
    this.shiftUp();
  }

  pop(): T | undefined {
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
