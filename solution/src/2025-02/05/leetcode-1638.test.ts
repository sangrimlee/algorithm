import { countSubstrings } from './leetcode-1638';

describe('2025-02-05: LeetCode 1638', () => {
  test('Example 1', () => {
    expect(countSubstrings('aba', 'baba')).toBe(6);
  });
  test('Example 2', () => {
    expect(countSubstrings('ab', 'bb')).toBe(3);
  });
});
