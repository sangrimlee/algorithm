import { findValidPair } from './leetcode-3438';

describe('2025-02-03: LeetCode 3438', () => {
  test('Example 1', () => {
    expect(findValidPair('2523533')).toBe('23');
  });
  test('Example 2', () => {
    expect(findValidPair('221')).toBe('21');
  });
  test('Example 3', () => {
    expect(findValidPair('22')).toBe('');
  });
});
