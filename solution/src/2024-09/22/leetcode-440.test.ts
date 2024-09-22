import { findKthNumber } from './leetcode-440';

describe('2024-09-22: LeetCode 440', () => {
  test('Example 1', () => {
    expect(findKthNumber(13, 2)).toBe(10);
  });
  test('Example 2', () => {
    expect(findKthNumber(1, 1)).toBe(1);
  });
});
