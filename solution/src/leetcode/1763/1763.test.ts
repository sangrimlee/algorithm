import { longestNiceSubstring } from './1763';

describe('LeetCode 1763', () => {
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
