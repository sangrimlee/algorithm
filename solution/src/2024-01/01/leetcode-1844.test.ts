import { replaceDigits } from './leetcode-1844';

describe('2024-01-01: LeetCode 1844', () => {
  test('Example 1', () => {
    expect(replaceDigits('a1c1e1')).toBe('abcdef');
  });
  test('Example 2', () => {
    expect(replaceDigits('a1b2c3d4e')).toBe('abbdcfdhe');
  });
});
