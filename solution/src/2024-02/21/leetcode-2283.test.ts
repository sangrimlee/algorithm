import { digitCount } from './leetcode-2283';

describe('2024-02-21: LeetCode 2283', () => {
  test('Example 1', () => {
    expect(digitCount('1210')).toBe(true);
  });
  test('Example 2', () => {
    expect(digitCount('030')).toBe(false);
  });
});
