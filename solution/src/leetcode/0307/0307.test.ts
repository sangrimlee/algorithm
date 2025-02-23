import { NumArray } from './0307';

describe('LeetCode 0307', () => {
  test('Example 1', () => {
    const numArray = new NumArray([1, 3, 5]);
    expect(numArray.sumRange(0, 2)).toBe(9); // return 1 + 3 + 5 = 9
    numArray.update(1, 2); // nums = [1, 2, 5]
    expect(numArray.sumRange(0, 2)).toBe(8); // return 1 + 2 + 5 = 8
  });
});
