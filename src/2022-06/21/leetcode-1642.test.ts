import { furthestBuilding } from './leetcode-1642';

describe('2022-06-21: LeetCode 1642', () => {
  test('Example 1', () => {
    expect(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1)).toBe(4);
  });

  test('Example 2', () => {
    expect(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2)).toBe(7);
  });

  test('Example 3', () => {
    expect(furthestBuilding([14, 3, 19, 3], 17, 0)).toBe(3);
  });
});
