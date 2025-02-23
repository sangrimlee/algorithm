import { repeatedCharacter } from './2351';

describe('LeetCode 2351', () => {
  test('Example 1', () => {
    expect(repeatedCharacter('abccbaacz')).toBe('c');
  });
  test('Example 2', () => {
    expect(repeatedCharacter('abcdd')).toBe('d');
  });
});
