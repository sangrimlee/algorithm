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
      this.future.push(this.history.pop()!);
      steps -= 1;
    }
    return this.history[this.history.length - 1];
  }

  forward(steps: number): string {
    while (0 < steps && 0 < this.future.length) {
      this.history.push(this.future.pop()!);
      steps -= 1;
    }
    return this.history[this.history.length - 1];
  }
}
