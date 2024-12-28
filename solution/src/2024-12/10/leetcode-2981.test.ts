import { maximumLength } from './leetcode-2981';

describe('2024-12-10: LeetCode 2981', () => {
  test('Example 1', () => {
    expect(maximumLength('aaaa')).toBe(2);
  });
  test('Example 2', () => {
    expect(maximumLength('abcdef')).toBe(-1);
  });
  test('Example 3', () => {
    expect(maximumLength('abcaba')).toBe(1);
  });
});