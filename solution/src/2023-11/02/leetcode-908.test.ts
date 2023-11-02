import { smallestRangeI } from './leetcode-908';

describe('2023-11-02: LeetCode 908', () => {
  test('Example 1', () => {
    expect(smallestRangeI([1], 0)).toBe(0);
  });
  test('Example 2', () => {
    expect(smallestRangeI([0, 10], 2)).toBe(6);
  });
  test('Example 3', () => {
    expect(smallestRangeI([1, 3, 6], 3)).toBe(0);
  });
});
