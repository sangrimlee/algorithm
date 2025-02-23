import { countPairs } from './2824';

describe('LeetCode 2824', () => {
  test('Example 1', () => {
    expect(countPairs([-1, 1, 2, 3, 1], 2)).toBe(3);
  });
  test('Example 2', () => {
    expect(countPairs([-6, 2, 5, -2, -7, -1, 3], -2)).toBe(10);
  });
});
