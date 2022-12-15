import { longestCommonSubsequence } from './leetcode-1143';

describe('2022-12-15: LeetCode 1143', () => {
  test('Example 1', () => {
    const text1 = 'abcde',
      text2 = 'ace';
    expect(longestCommonSubsequence(text1, text2)).toBe(3);
  });

  test('Example 2', () => {
    const text1 = 'abc',
      text2 = 'abc';
    expect(longestCommonSubsequence(text1, text2)).toBe(3);
  });

  test('Example 3', () => {
    const text1 = 'abc',
      text2 = 'def';
    expect(longestCommonSubsequence(text1, text2)).toBe(0);
  });
});
