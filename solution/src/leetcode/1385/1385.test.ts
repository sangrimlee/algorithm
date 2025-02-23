import { findTheDistanceValue } from './1385';

describe('LeetCode 1385', () => {
  test('Example 1', () => {
    expect(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)).toBe(2);
  });
  test('Example 2', () => {
    expect(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)).toBe(2);
  });
  test('Example 3', () => {
    expect(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)).toBe(1);
  });
});
