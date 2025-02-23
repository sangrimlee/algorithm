import { minEatingSpeed } from './0875';

describe('LeetCode 0875', () => {
  test('Example 1', () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
  });
  test('Example 2', () => {
    expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30);
  });
  test('Example 3', () => {
    expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23);
  });
});
