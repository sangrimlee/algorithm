import { repeatedSubstringPattern } from './leetcode-459';

describe('2023-08-21: LeetCode 459', () => {
  test('Example 1', () => {
    expect(repeatedSubstringPattern('abab')).toBeTruthy();
  });
  test('Example 2', () => {
    expect(repeatedSubstringPattern('aba')).toBeFalsy();
  });
  test('Example 3', () => {
    expect(repeatedSubstringPattern('abcabcabcabc')).toBeTruthy();
  });
});
