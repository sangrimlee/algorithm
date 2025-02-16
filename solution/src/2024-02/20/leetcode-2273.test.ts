import { removeAnagrams } from './leetcode-2273';

describe('2024-02-20: LeetCode 2273', () => {
  test('Example 1', () => {
    expect(removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'cd'])).toEqual(['abba', 'cd']);
  });
  test('Example 2', () => {
    expect(removeAnagrams(['a', 'b', 'c', 'd', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
  test('Example 3', () => {
    expect(removeAnagrams(['a', 'b', 'a'])).toEqual(['a', 'b', 'a']);
  });
});
