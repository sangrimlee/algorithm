import { countVowelSubstrings } from './leetcode-2062';

describe('2024-01-27: LeetCode 2062', () => {
  test('Example 1', () => {
    expect(countVowelSubstrings('aeiouu')).toBe(2);
  });
  test('Example 2', () => {
    expect(countVowelSubstrings('unicornarihan')).toBe(0);
  });
  test('Example 3', () => {
    expect(countVowelSubstrings('cuaieuouac')).toBe(7);
  });
});
