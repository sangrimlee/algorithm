import { numberOfSpecialChars } from './leetcode-3120';

describe('2024-05-08: LeetCode 3120', () => {
  test('Example 1', () => {
    expect(numberOfSpecialChars('aaAbcBC')).toBe(3);
  });
  test('Example 2', () => {
    expect(numberOfSpecialChars('abc')).toBe(0);
  });
  test('Example 3', () => {
    expect(numberOfSpecialChars('abBCab')).toBe(1);
  });
});
