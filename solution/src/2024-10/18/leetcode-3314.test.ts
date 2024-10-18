import { minBitwiseArray } from './leetcode-3314';

describe('2024-10-18: LeetCode 3314', () => {
  test('Example 1', () => {
    expect(minBitwiseArray([2, 3, 5, 7])).toEqual([-1, 1, 4, 3]);
  });
  test('Example 2', () => {
    expect(minBitwiseArray([11, 13, 31])).toEqual([9, 12, 15]);
  });
});
