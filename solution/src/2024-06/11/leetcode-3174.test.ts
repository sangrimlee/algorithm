import { clearDigits } from './leetcode-3174';

describe('2024-06-11: LeetCode 3174', () => {
  test('Example 1', () => {
    expect(clearDigits('abc')).toBe('abc');
  });

  test('Example 2', () => {
    expect(clearDigits('cb34')).toBe('');
  });
});
