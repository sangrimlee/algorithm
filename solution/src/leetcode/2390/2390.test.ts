import { removeStars } from './2390';

describe('LeetCode 2390', () => {
  test('Example 1', () => {
    expect(removeStars('leet**cod*e')).toBe('lecoe');
  });
  test('Example 2', () => {
    expect(removeStars('erase*****')).toBe('');
  });
});
