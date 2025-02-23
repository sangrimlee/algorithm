import { sumIndicesWithKSetBits } from './2859';

describe('LeetCode 2859', () => {
  test('Example 1', () => {
    expect(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1)).toBe(13);
  });
  test('Example 2', () => {
    expect(sumIndicesWithKSetBits([4, 3, 2, 1], 2)).toBe(1);
  });
});
