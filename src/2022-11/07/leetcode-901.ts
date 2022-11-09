/**
 * 901. Online Stock Span
 * https://leetcode.com/problems/online-stock-span/
 */
export class StockSpanner {
  stack: [number, number][];

  constructor() {
    this.stack = [];
  }

  get top(): [number, number] {
    if (this.stack.length === 0) {
      return [0, 0];
    }
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.stack.pop();
  }

  push(price: number, prevDays: number) {
    this.stack.push([price, prevDays]);
  }

  next(price: number): number {
    let prevDays = 1;
    while (0 < this.stack.length && this.top[0] <= price) {
      prevDays += this.top[1];
      this.pop();
    }
    this.push(price, prevDays);
    return prevDays;
  }
}
