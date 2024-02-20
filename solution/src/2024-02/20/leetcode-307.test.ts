import { NumArray } from './leetcode-307';

describe('2024-02-20: LeetCode 307', () => {
  test('Example 1', () => {
    const numArray = new NumArray([1, 3, 5]);
    expect(numArray.sumRange(0, 2)).toBe(9); // return 1 + 3 + 5 = 9
    numArray.update(1, 2); // nums = [1, 2, 5]
    expect(numArray.sumRange(0, 2)).toBe(8); // return 1 + 2 + 5 = 8
  });
});
