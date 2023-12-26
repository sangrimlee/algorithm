import { longestNiceSubstring } from './leetcode-1763';

describe('2023-12-26: LeetCode 1763', () => {
  test('Example 1', () => {
    expect(longestNiceSubstring('YazaAay')).toBe('aAa');
  });
  test('Example 2', () => {
    expect(longestNiceSubstring('Bb')).toBe('Bb');
  });
  test('Example 3', () => {
    expect(longestNiceSubstring('c')).toBe('');
  });
});
