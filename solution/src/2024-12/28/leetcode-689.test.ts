import { maxSumOfThreeSubarrays } from './leetcode-689';

describe('2024-12-28: LeetCode 689', () => {
  test('Example 1', () => {
    expect(maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2)).toEqual([0, 3, 5]);
  });
  test('Example 2', () => {
    expect(maxSumOfThreeSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1], 2)).toEqual([0, 2, 4]);
  });
  test('Example 3', () => {
    expect(maxSumOfThreeSubarrays([7, 13, 20, 19, 19, 2, 10, 1, 1, 19], 3)).toEqual([1, 4, 7]);
  });
});
