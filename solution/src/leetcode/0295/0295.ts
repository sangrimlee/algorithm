import { Heap } from '@algorithm/lib';

/**
 * 295. Find Median from Data Stream
 * https://leetcode.com/problems/find-median-from-data-stream/
 */
export class MedianFinder {
  small: Heap<number>;
  large: Heap<number>;
  constructor() {
    this.small = new Heap((a, b) => a - b);
    this.large = new Heap((a, b) => a - b);
  }

  addNum(num: number): void {
    if (this.small.length === this.large.length) {
      this.small.push(-num);
      const smallValue = this.small.pop();
      if (smallValue !== undefined) {
        this.large.push(-smallValue);
      }
    } else {
      this.large.push(num);
      const largeValue = this.large.pop();
      if (largeValue !== undefined) {
        this.small.push(-largeValue);
      }
    }
  }

  findMedian(): number {
    if (this.large.peek === undefined || this.small.peek === undefined) {
      return 0;
    }
    if (this.small.length === this.large.length) {
      return (this.large.peek - this.small.peek) / 2;
    } else {
      return this.large.peek;
    }
  }
}
