import { getEncryptedString } from './3210';

describe('LeetCode 3210', () => {
  test('Example 1', () => {
    expect(getEncryptedString('dart', 3)).toBe('tdar');
  });
  test('Example 2', () => {
    expect(getEncryptedString('aaa', 1)).toBe('aaa');
  });
});
