import { maximumElementAfterDecrementingAndRearranging } from './leetcode-1846';

describe('2023-11-15: LeetCode 1846', () => {
  test('Example 1', () => {
    expect(maximumElementAfterDecrementingAndRearranging([2, 2, 1, 2, 1])).toBe(2);
  });
  test('Example 2', () => {
    expect(maximumElementAfterDecrementingAndRearranging([100, 1, 1000])).toBe(3);
  });
  test('Example 3', () => {
    expect(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5])).toBe(5);
  });
});
