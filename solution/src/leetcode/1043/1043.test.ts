import { maxSumAfterPartitioning } from './1043';

describe('LeetCode 1043', () => {
  test('Example 1', () => {
    expect(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)).toBe(84);
  });
  test('Example 2', () => {
    expect(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4)).toBe(83);
  });
  test('Example 3', () => {
    expect(maxSumAfterPartitioning([1], 1)).toBe(1);
  });
});
