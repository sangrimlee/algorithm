import { reversePrefix } from './2000';

describe('LeetCode 2000', () => {
  test('Example 1', () => {
    expect(reversePrefix('abcdefd', 'd')).toBe('dcbaefd');
  });
  test('Example 2', () => {
    expect(reversePrefix('xyxzxe', 'z')).toBe('zxyxxe');
  });
  test('Example 3', () => {
    expect(reversePrefix('abcd', 'z')).toBe('abcd');
  });
});
