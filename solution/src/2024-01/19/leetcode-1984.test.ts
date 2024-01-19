import { minimumDifference } from './leetcode-1984';

describe('2024-01-19: LeetCode 1984', () => {
  test('Example 1', () => {
    expect(minimumDifference([90], 1)).toBe(0);
  });
  test('Example 2', () => {
    expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2);
  });
});
