import { countVowelSubstrings } from './2062';

describe('LeetCode 2062', () => {
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
