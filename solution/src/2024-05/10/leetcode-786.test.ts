import { kthSmallestPrimeFraction } from './leetcode-786';

describe('2024-05-10: LeetCode 786', () => {
  test('Example 1', () => {
    expect(kthSmallestPrimeFraction([1, 2, 3, 5], 3)).toEqual([2, 5]);
  });
  test('Example 2', () => {
    expect(kthSmallestPrimeFraction([1, 7], 1)).toEqual([1, 7]);
  });
});
