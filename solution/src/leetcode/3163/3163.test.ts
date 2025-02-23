import { compressedString } from './3163';

describe('LeetCode 3163', () => {
  test('Example 1', () => {
    expect(compressedString('abcde')).toBe('1a1b1c1d1e');
  });
  test('Example 2', () => {
    expect(compressedString('aaaaaaaaaaaaaabb')).toBe('9a5a2b');
  });
  test('Example 3', () => {
    expect(compressedString('aaaaaaaaay')).toBe('9a1y');
  });
});
