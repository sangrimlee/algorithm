import { findNumberOfLIS } from './leetcode-673';

describe('2023-07-22: LeetCode 673', () => {
  test('Example 1', () => {
    expect(findNumberOfLIS([1, 3, 5, 4, 7])).toEqual(2);
  });
  test('Example 2', () => {
    expect(findNumberOfLIS([2, 2, 2, 2, 2])).toEqual(5);
  });
});
