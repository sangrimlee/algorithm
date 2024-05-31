/**
 * 1381. Design a Stack With Increment Operation
 * https://leetcode.com/problems/design-a-stack-with-increment-operation
 */
export class CustomStack {
  private readonly stack: number[];
  private readonly maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  pop(): number {
    return this.stack.pop() ?? -1;
  }

  increment(k: number, val: number): void {
    const maxLength = Math.min(this.stack.length, k);
    for (let i = 0; i < maxLength; i++) {
      this.stack[i] += val;
    }
  }
}
