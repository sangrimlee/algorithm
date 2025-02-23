import { repeatedSubstringPattern } from './0459';

describe('LeetCode 0459', () => {
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
