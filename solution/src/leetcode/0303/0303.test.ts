import { NumArray } from './0303';

describe('LeetCode 0303', () => {
  test('Example 1', () => {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
    expect(numArray.sumRange(0, 2)).toBe(1);
    expect(numArray.sumRange(2, 5)).toBe(-1);
    expect(numArray.sumRange(0, 5)).toBe(-3);
  });
});
