import { findMaxLength } from './leetcode-525';

describe('2024-03-16: LeetCode 525', () => {
  test('Example 1', () => {
    expect(findMaxLength([0, 1])).toBe(2);
  });
  test('Example 2', () => {
    expect(findMaxLength([0, 1, 0])).toBe(2);
  });
});
