import { minSubsequence } from './1403';

describe('LeetCode 1403', () => {
  test('Example 1', () => {
    expect(minSubsequence([4, 3, 10, 9, 8])).toEqual([10, 9]);
  });
  test('Example 2', () => {
    expect(minSubsequence([4, 4, 7, 6, 7])).toEqual([7, 7, 6]);
  });
});
