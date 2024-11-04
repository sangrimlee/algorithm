import { compressedString } from './leetcode-3163';

describe('2024-11-04: LeetCode 3163', () => {
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
