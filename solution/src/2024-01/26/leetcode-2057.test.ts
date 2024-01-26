import { smallestEqual } from './leetcode-2057';

describe('2024-01-26: LeetCode 2057', () => {
  test('Example 1', () => {
    expect(smallestEqual([0, 1, 2])).toBe(0);
  });
  test('Example 2', () => {
    expect(smallestEqual([4, 3, 2, 1])).toBe(2);
  });
  test('Example 3', () => {
    expect(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(-1);
  });
});
