import { sortedSquares } from './leetcode-977';

describe('2024-03-02: LeetCode 977', () => {
  test('Example 1', () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  });
  test('Example 2', () => {
    expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });
});
