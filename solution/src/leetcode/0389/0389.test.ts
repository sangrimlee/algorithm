import { findTheDifference } from './0389';

describe('LeetCode 0389', () => {
  test('Example 1', () => {
    expect(findTheDifference('abcd', 'abcde')).toBe('e');
  });
  test('Example 2', () => {
    expect(findTheDifference('', 'y')).toBe('y');
  });
});
