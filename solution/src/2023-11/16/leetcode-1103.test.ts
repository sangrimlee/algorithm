import { distributeCandies } from './leetcode-1103';

describe('2023-11-16: LeetCode 1103', () => {
  test('Example 1', () => {
    expect(distributeCandies(7, 4)).toEqual([1, 2, 3, 1]);
  });
  test('Example 2', () => {
    expect(distributeCandies(10, 3)).toEqual([5, 2, 3]);
  });
});
