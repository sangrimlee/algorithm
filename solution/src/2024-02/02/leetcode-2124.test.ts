import { checkString } from './leetcode-2124';

describe('2024-02-02: LeetCode 2124', () => {
  test('Example 1', () => {
    expect(checkString('aaabbb')).toBe(true);
  });
  test('Example 2', () => {
    expect(checkString('abab')).toBe(false);
  });
  test('Example 3', () => {
    expect(checkString('bbb')).toBe(true);
  });
});
