import { findKthPositive } from './1539';

describe('LeetCode 1539', () => {
  test('Example 1', () => {
    const arr = [2, 3, 4, 7, 11],
      k = 5;
    expect(findKthPositive(arr, k)).toBe(9);
  });

  test('Example 2', () => {
    const arr = [1, 2, 3, 4],
      k = 2;
    expect(findKthPositive(arr, k)).toBe(6);
  });
});
