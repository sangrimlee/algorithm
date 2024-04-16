import { wateringPlants } from './leetcode-2079';

describe('2024-04-15: LeetCode 2079', () => {
  test('Example 1', () => {
    expect(wateringPlants([2, 2, 3, 3], 5)).toBe(14);
  });
  test('Example 2', () => {
    expect(wateringPlants([1, 1, 1, 4, 2, 3], 4)).toBe(30);
  });
  test('Example 3', () => {
    expect(wateringPlants([7, 7, 7, 7, 7, 7, 7], 8)).toBe(49);
  });
});
