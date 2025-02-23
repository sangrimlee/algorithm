import { makeEqual } from './1897';

describe('LeetCode 1897', () => {
  test('Example 1', () => {
    expect(makeEqual(['abc', 'aabc', 'bc'])).toBe(true);
  });
  test('Example 2', () => {
    expect(makeEqual(['ab', 'a'])).toBe(false);
  });
});
