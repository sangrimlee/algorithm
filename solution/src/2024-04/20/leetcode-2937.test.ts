import { findMinimumOperations } from './leetcode-2937';

describe('2024-04-20: LeetCode 2937', () => {
  test('Example 1', () => {
    expect(findMinimumOperations('abc', 'abb', 'ab')).toBe(2);
  });
  test('Example 2', () => {
    expect(findMinimumOperations('dac', 'bac', 'cac')).toBe(-1);
  });
});
