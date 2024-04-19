import { countDistinctIntegers } from './leetcode-2442';

describe('2024-04-19: LeetCode 2442', () => {
  test('Example 1', () => {
    expect(countDistinctIntegers([1, 13, 10, 12, 31])).toBe(6);
  });
  test('Example 2', () => {
    expect(countDistinctIntegers([2, 2, 2])).toBe(1);
  });
});
