import { waysToSplitArray } from './leetcode-2270';

describe('2025-01-03: LeetCode 2270', () => {
  test('Example 1', () => {
    expect(waysToSplitArray([10, 4, -8, 7])).toBe(2);
  });
  test('Example 2', () => {
    expect(waysToSplitArray([2, 3, 1, 0])).toBe(2);
  });
});
