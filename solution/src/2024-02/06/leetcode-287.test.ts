import { findDuplicate } from './leetcode-287';

describe('2024-02-06: LeetCode 287', () => {
  test('Example 1', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });
  test('Example 2', () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
  });
});
