import { equalSubstring } from './1208';

describe('LeetCode 1208', () => {
  test('Example 1', () => {
    expect(equalSubstring('abcd', 'bcdf', 3)).toBe(3);
  });
  test('Example 2', () => {
    expect(equalSubstring('abcd', 'cdef', 3)).toBe(1);
  });
  test('Example 3', () => {
    expect(equalSubstring('abcd', 'acde', 0)).toBe(1);
  });
});
