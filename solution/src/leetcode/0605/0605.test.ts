import { canPlaceFlowers } from './0605';

describe('LeetCode 0605', () => {
  test('Example 1', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  });
  test('Example 2', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });
});
