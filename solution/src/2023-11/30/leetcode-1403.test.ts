import { minSubsequence } from './leetcode-1403';

describe('2023-11-30: LeetCode 1403', () => {
  test('Example 1', () => {
    expect(minSubsequence([4, 3, 10, 9, 8])).toEqual([10, 9]);
  });
  test('Example 2', () => {
    expect(minSubsequence([4, 4, 7, 6, 7])).toEqual([7, 7, 6]);
  });
});
