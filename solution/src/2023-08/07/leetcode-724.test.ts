import { pivotIndex } from './leetcode-724';

describe('2023-08-07: LeetCode 724', () => {
  test('Example 1', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  });
  test('Example 2', () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1);
  });
  test('Example 3', () => {
    expect(pivotIndex([2, 1, -1])).toBe(0);
  });
});
