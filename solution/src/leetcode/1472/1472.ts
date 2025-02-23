/**
 * 1472. Design Browser History
 * https://leetcode.com/problems/design-browser-history
 */
export class BrowserHistory {
  private history: string[];
  private future: string[];

  constructor(homepage: string) {
    this.history = [homepage];
    this.future = [];
  }

  visit(url: string): void {
    this.history.push(url);
    this.future = [];
  }

  back(steps: number): string {
    while (0 < steps && 1 < this.history.length) {
      const lastHistory = this.history.pop();
      if (lastHistory !== undefined) {
        this.future.push(lastHistory);
      }
      steps -= 1;
    }
    return this.history[this.history.length - 1];
  }

  forward(steps: number): string {
    while (0 < steps && 0 < this.future.length) {
      const recentFuture = this.future.pop();
      if (recentFuture !== undefined) {
        this.history.push(recentFuture);
      }
      steps -= 1;
    }
    return this.history[this.history.length - 1];
  }
}
