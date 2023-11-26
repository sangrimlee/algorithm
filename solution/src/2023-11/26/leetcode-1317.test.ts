import { getNoZeroIntegers } from './leetcode-1317';

describe('2023-11-26: LeetCode 1317', () => {
  test('Example 1', () => {
    expect(getNoZeroIntegers(2)).toEqual([1, 1]);
  });
  test('Example 2', () => {
    expect(getNoZeroIntegers(11)).toEqual([2, 9]);
  });
});
