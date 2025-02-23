/**
 * 933. Number of Recent Calls
 * https://leetcode.com/problems/number-of-recent-calls
 */
export class RecentCounter {
  private readonly queue: number[];

  constructor() {
    this.queue = [];
  }

  shiftUntilPastTime(t: number): void {
    while (0 < this.queue.length && this.queue[0] < t - 3000) {
      this.queue.shift();
    }
  }

  ping(t: number): number {
    this.queue.push(t);
    this.shiftUntilPastTime(t);
    return this.queue.length;
  }
}
