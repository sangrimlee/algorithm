import { removeDigit } from './leetcode-2259';

describe('2024-02-19: LeetCode 2259', () => {
  test('Example 1', () => {
    expect(removeDigit('123', '3')).toBe('12');
  });
  test('Example 2', () => {
    expect(removeDigit('1231', '1')).toBe('231');
  });
  test('Example 3', () => {
    expect(removeDigit('551', '5')).toBe('51');
  });
});
