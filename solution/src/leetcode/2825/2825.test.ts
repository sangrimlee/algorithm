import { canMakeSubsequence } from './2825';

describe('LeetCode 2825', () => {
  test('Example 1', () => {
    expect(canMakeSubsequence('abc', 'ad')).toBe(true);
  });
  test('Example 2', () => {
    expect(canMakeSubsequence('zc', 'ad')).toBe(true);
  });
  test('Example 3', () => {
    expect(canMakeSubsequence('ab', 'd')).toBe(false);
  });
});
