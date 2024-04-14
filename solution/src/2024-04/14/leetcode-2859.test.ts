import { sumIndicesWithKSetBits } from './leetcode-2859';

describe('2024-04-14: LeetCode 2859', () => {
  test('Example 1', () => {
    expect(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1)).toBe(13);
  });
  test('Example 2', () => {
    expect(sumIndicesWithKSetBits([4, 3, 2, 1], 2)).toBe(1);
  });
});
