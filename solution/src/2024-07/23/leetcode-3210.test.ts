import { getEncryptedString } from './leetcode-3210';

describe('2024-07-23: LeetCode 3210', () => {
  test('Example 1', () => {
    expect(getEncryptedString('dart', 3)).toBe('tdar');
  });
  test('Example 2', () => {
    expect(getEncryptedString('aaa', 1)).toBe('aaa');
  });
});
