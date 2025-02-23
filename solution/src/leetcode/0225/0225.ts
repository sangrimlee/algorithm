/**
 * 225. Implement Stack using Queues
 * https://leetcode.com/problems/implement-stack-using-queues
 *
 * JavaScript는 Natvie Queue가 없기 떄문에, 기존의 `pop`을 사용하지 않고, `shift`만을 사용
 */
export class MyStack {
  private readonly queue: number[];

  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
    for (let i = 0; i < this.queue.length - 1; i++) {
      const peek = this.queue.shift();
      if (peek !== undefined) {
        this.queue.push(peek);
      }
    }
  }

  pop(): number | undefined {
    return this.queue.shift();
  }

  top(): number | undefined {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
