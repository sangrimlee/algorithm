import { Heap } from '@algorithm/lib';

/**
 * 703. Kth Largest Element in a Stream
 * https://leetcode.com/problems/kth-largest-element-in-a-stream
 */
export class KthLargest {
  private readonly k: number;
  private readonly heap: Heap<number>;

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.heap = new Heap((a, b) => a - b);
    nums.forEach((num) => this.heap.push(num));
    this.popUntilKth();
  }

  private popUntilKth() {
    while (this.k < this.heap.length) {
      this.heap.pop();
    }
  }

  add(val: number) {
    this.heap.push(val);
    this.popUntilKth();
    return this.heap.peek;
  }
}
