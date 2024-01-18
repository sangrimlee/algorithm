import { numOfStrings } from './leetcode-1967';

describe('2024-01-18: LeetCode 1967', () => {
  test('Example 1', () => {
    expect(numOfStrings(['a', 'abc', 'bc', 'd'], 'abc')).toBe(3);
  });
  test('Example 2', () => {
    expect(numOfStrings(['a', 'b', 'c'], 'aaaaabbbbb')).toBe(2);
  });
  test('Example 3', () => {
    expect(numOfStrings(['a', 'a', 'a'], 'ab')).toBe(3);
  });
});
