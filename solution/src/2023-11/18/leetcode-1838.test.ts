import { maxFrequency } from './leetcode-1838';

describe('2023-11-18: LeetCode 1838', () => {
  test('Example 1', () => {
    expect(maxFrequency([1, 2, 4], 5)).toBe(3);
  });
  test('Example 2', () => {
    expect(maxFrequency([1, 4, 8, 13], 5)).toBe(2);
  });
  test('Example 3', () => {
    expect(maxFrequency([3, 9, 6], 2)).toBe(1);
  });
});
