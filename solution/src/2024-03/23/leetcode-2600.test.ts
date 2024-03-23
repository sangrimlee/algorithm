import { kItemsWithMaximumSum } from './leetcode-2600';

describe('2024-03-23: LeetCode 2600', () => {
  test('Example 1', () => {
    expect(kItemsWithMaximumSum(3, 2, 0, 2)).toBe(2);
  });
  test('Example 2', () => {
    expect(kItemsWithMaximumSum(3, 2, 0, 4)).toBe(3);
  });
});
