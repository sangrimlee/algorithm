/**
 * 232. Implement Queue using Stacks
 * https://leetcode.com/problems/implement-queue-using-stacks
 */
export class MyQueue {
  private stack: {
    first: number[];
    second: number[];
  };
  private current: 'first' | 'second';
  private state: 'push' | 'pop';
  public length = 0;

  constructor() {
    this.stack = { first: [], second: [] };
    this.current = 'first';
    this.state = 'push';
  }

  private get currentStack() {
    return this.stack[this.current];
  }

  anotherStack(): 'first' | 'second' {
    return this.current === 'first' ? 'second' : 'first';
  }

  switchStack(): void {
    while (0 < this.currentStack.length) {
      const topOfStack = this.currentStack.pop();
      if (topOfStack) {
        this.stack[this.anotherStack()].push(topOfStack);
      }
    }
    this.current = this.anotherStack();
  }

  push(x: number): void {
    if (this.state !== 'push') {
      this.state = 'push';
      this.switchStack();
    }
    this.currentStack.push(x);
    this.length += 1;
  }

  pop(): number | undefined {
    if (this.state !== 'pop') {
      this.state = 'pop';
      this.switchStack();
    }
    this.length -= 1;
    return this.currentStack.pop();
  }

  peek(): number {
    if (this.state === 'pop') {
      return this.currentStack[this.length - 1];
    } else {
      return this.currentStack[0];
    }
  }

  empty(): boolean {
    return this.length === 0;
  }
}
