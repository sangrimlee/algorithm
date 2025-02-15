import { canPlaceFlowers } from './leetcode-605';

describe('2023-06-15: LeetCode 605', () => {
  test('Example 1', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  });
  test('Example 2', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });
});
