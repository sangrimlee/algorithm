import { findWordsContaining } from './2942';

describe('LeetCode 2942', () => {
  test('Example 1', () => {
    expect(findWordsContaining(['leet', 'code'], 'e')).toEqual([0, 1]);
  });
  test('Example 2', () => {
    expect(findWordsContaining(['abc', 'bcd', 'aaaa', 'cbc'], 'a')).toEqual([0, 2]);
  });
  test('Example 3', () => {
    expect(findWordsContaining(['abc', 'bcd', 'aaaa', 'cbc'], 'z')).toEqual([]);
  });
});
