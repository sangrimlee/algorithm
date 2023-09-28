import { findTheDifference } from './leetcode-389';

describe('2023-09-27: LeetCode 389', () => {
  test('Example 1', () => {
    expect(findTheDifference('abcd', 'abcde')).toBe('e');
  });
  test('Example 2', () => {
    expect(findTheDifference('', 'y')).toBe('y');
  });
});
