import { Heap } from '../../lib/heap';

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
      this.large.push(-(this.small.pop() as number));
    } else {
      this.large.push(num);
      this.small.push(-(this.large.pop() as number));
    }
  }

  findMedian(): number {
    if (this.large.peek === undefined || this.small.peek === undefined)
      return 0;
    if (this.small.length === this.large.length) {
      return (this.large.peek - this.small.peek) / 2;
    } else {
      return this.large.peek;
    }
  }
}
