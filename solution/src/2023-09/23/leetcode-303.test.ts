import { NumArray } from './leetcode-303';

describe('2023-09-23: LeetCode 303', () => {
  test('Example 1', () => {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
    expect(numArray.sumRange(0, 2)).toBe(1);
    expect(numArray.sumRange(2, 5)).toBe(-1);
    expect(numArray.sumRange(0, 5)).toBe(-3);
  });
});
