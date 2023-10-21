import { findLengthOfLCIS } from './leetcode-674';

describe('2023-10-21: LeetCode 674', () => {
  test('Example 1', () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
  });
  test('Example 2', () => {
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1);
  });
  test('Example 3', () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 6, 8, 10])).toBe(4);
  });
});
