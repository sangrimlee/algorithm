import { largestDivisibleSubset } from './leetcode-368';

describe('2024-02-09: LeetCode 368', () => {
  test('Example 1', () => {
    expect(largestDivisibleSubset([1, 2, 3])).toEqual([1, 2]);
  });
  test('Example 2', () => {
    expect(largestDivisibleSubset([1, 2, 4, 8])).toEqual([1, 2, 4, 8]);
  });
});
