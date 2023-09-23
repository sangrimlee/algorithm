/**
 * 303. Range Sum Query - Immutable
 * https://leetcode.com/problems/range-sum-query-immutable
 */
export class NumArray {
  private readonly prefixSum: number[];

  constructor(nums: number[]) {
    const n = nums.length;
    this.prefixSum = new Array<number>(n + 1).fill(0);
    nums.forEach((num, i) => {
      this.prefixSum[i + 1] += num + this.prefixSum[i];
    });
  }

  sumRange(left: number, right: number): number {
    return this.prefixSum[right + 1] - this.prefixSum[left];
  }
}
