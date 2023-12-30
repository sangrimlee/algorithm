import { makeEqual } from './leetcode-1897';

describe('2023-12-30: LeetCode 1897', () => {
  test('Example 1', () => {
    expect(makeEqual(['abc', 'aabc', 'bc'])).toBe(true);
  });
  test('Example 2', () => {
    expect(makeEqual(['ab', 'a'])).toBe(false);
  });
});
