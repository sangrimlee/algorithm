import { convertToTitle } from './leetcode-168';

describe('2023-08-22: LeetCode 168', () => {
  test('Example 1', () => {
    expect(convertToTitle(1)).toBe('A');
  });
  test('Example 2', () => {
    expect(convertToTitle(28)).toBe('AB');
  });
  test('Example 3', () => {
    expect(convertToTitle(701)).toBe('ZY');
  });
});
