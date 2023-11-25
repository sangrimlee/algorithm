import { getSumAbsoluteDifferences } from './leetcode-1685';

describe('2023-11-25: LeetCode 1685', () => {
  test('Example 1', () => {
    expect(getSumAbsoluteDifferences([2, 3, 5])).toEqual([4, 3, 5]);
  });
  test('Example 2', () => {
    expect(getSumAbsoluteDifferences([1, 4, 6, 8, 10])).toEqual([24, 15, 13, 15, 21]);
  });
});
