/**
 * 352. Data Stream as Disjoint Intervals
 * https://leetcode.com/problems/data-stream-as-disjoint-intervals
 */
export class SummaryRanges {
  values: Set<number>;
  constructor() {
    this.values = new Set();
  }
  get isEmpty() {
    return this.values.size === 0;
  }

  addNum(value: number): void {
    this.values.add(value);
  }

  getIntervals(): number[][] {
    if (this.isEmpty) {
      return [];
    }
    const intervals = new Array<number[]>();
    const values = [...this.values].sort((a, b) => a - b);

    let [left, right] = [-1, -1];
    for (const value of values) {
      if (left < 0) {
        right = value;
        left = right;
      } else if (value === right + 1) {
        right = value;
      } else {
        intervals.push([left, right]);
        right = value;
        left = right;
      }
    }
    intervals.push([left, right]);
    return intervals;
  }
}
