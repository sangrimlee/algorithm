import { minStoneSum } from './leetcode-1962';

describe('2022-12-28: LeetCode 1962', () => {
  test('Example 1', () => {
    const piles = [5, 4, 9],
      k = 2;
    expect(minStoneSum(piles, k)).toBe(12);
  });

  test('Example 2', () => {
    const piles = [4, 3, 6, 7],
      k = 3;
    expect(minStoneSum(piles, k)).toBe(12);
  });
});
