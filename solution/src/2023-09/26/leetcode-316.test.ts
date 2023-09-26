import { removeDuplicateLetters } from './leetcode-316';

describe('2023-09-26: LeetCode 316', () => {
  test('Example 1', () => {
    expect(removeDuplicateLetters('bcabc')).toBe('abc');
  });
  test('Example 2', () => {
    expect(removeDuplicateLetters('cbacdcbc')).toBe('acdb');
  });
});
