import { findTheLongestBalancedSubstring } from './2609';

describe('LeetCode 2609', () => {
  test('Example 1', () => {
    expect(findTheLongestBalancedSubstring('01000111')).toBe(6);
  });
  test('Example 2', () => {
    expect(findTheLongestBalancedSubstring('00111')).toBe(4);
  });
  test('Example 3', () => {
    expect(findTheLongestBalancedSubstring('111')).toBe(0);
  });
});
