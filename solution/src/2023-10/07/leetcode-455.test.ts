import { findContentChildren } from './leetcode-455';

describe('2023-10-07: LeetCode 455', () => {
  test('Example 1', () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1);
  });
  test('Example 2', () => {
    expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2);
  });
});
