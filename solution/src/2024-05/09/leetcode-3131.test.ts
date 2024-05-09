import { addedInteger } from './leetcode-3131';

describe('2024-05-09: LeetCode 3131', () => {
  test('Example 1', () => {
    expect(addedInteger([2, 6, 4], [9, 7, 5])).toBe(3);
  });
  test('Example 2', () => {
    expect(addedInteger([10], [5])).toBe(-5);
  });
  test('Example 3', () => {
    expect(addedInteger([1, 1, 1, 1], [1, 1, 1, 1])).toBe(0);
  });
});
