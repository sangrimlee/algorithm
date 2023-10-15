import { arrayPairSum } from './leetcode-561';

describe('2023-10-15: LeetCode 561', () => {
  test('Example 1', () => {
    expect(arrayPairSum([1, 4, 3, 2])).toBe(4);
  });
  test('Example 2', () => {
    expect(arrayPairSum([6, 2, 6, 5, 1, 2])).toBe(9);
  });
});
