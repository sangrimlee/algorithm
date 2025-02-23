import { removeDuplicateLetters } from './0316';

describe('LeetCode 0316', () => {
  test('Example 1', () => {
    expect(removeDuplicateLetters('bcabc')).toBe('abc');
  });
  test('Example 2', () => {
    expect(removeDuplicateLetters('cbacdcbc')).toBe('acdb');
  });
});
