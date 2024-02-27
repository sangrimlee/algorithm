import { repeatedCharacter } from './leetcode-2351';

describe('2024-02-27: LeetCode 2351', () => {
  test('Example 1', () => {
    expect(repeatedCharacter('abccbaacz')).toBe('c');
  });
  test('Example 2', () => {
    expect(repeatedCharacter('abcdd')).toBe('d');
  });
});
