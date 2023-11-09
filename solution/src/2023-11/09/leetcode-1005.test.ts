import { largestSumAfterKNegations } from './leetcode-1005';

describe('2023-11-09: LeetCode 1005', () => {
  test('Example 1', () => {
    expect(largestSumAfterKNegations([4, 2, 3], 1)).toBe(5);
  });
  test('Example 2', () => {
    expect(largestSumAfterKNegations([3, -1, 0, 2], 3)).toBe(6);
  });
  test('Example 3', () => {
    expect(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)).toBe(13);
  });
});
