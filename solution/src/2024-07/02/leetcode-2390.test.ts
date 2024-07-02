import { removeStars } from './leetcode-2390';

describe('2024-07-02: LeetCode 2390', () => {
  test('Example 1', () => {
    expect(removeStars('leet**cod*e')).toBe('lecoe');
  });
  test('Example 2', () => {
    expect(removeStars('erase*****')).toBe('');
  });
});
