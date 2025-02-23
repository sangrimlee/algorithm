import { checkString } from './2124';

describe('LeetCode 2124', () => {
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
