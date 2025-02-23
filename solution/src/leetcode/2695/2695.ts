/**
 * 2695. Array Wrapper
 * https://leetcode.com/problems/array-wrapper
 */
export class ArrayWrapper {
  private readonly nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((a, b) => a + b, 0);
  }

  toString() {
    return `[${this.nums.toString()}]`;
  }
}
