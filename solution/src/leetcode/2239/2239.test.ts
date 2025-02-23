import { findClosestNumber } from './2239';

describe('LeetCode 2239', () => {
  test('Example 1', () => {
    expect(findClosestNumber([-4, -2, 1, 4, 8])).toBe(1);
  });
  test('Example 2', () => {
    expect(findClosestNumber([2, -1, 1])).toBe(1);
  });
  test('Example 3', () => {
    expect(findClosestNumber([-10000, -10000])).toBe(-10000);
  });
});
