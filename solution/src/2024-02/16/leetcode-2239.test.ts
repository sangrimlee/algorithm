import { findClosestNumber } from './leetcode-2239';

describe('2024-02-16: LeetCode 2239', () => {
  test('Example 1', () => {
    expect(findClosestNumber([-4, -2, 1, 4, 8])).toBe(1);
  });
  test('Example 2', () => {
    expect(findClosestNumber([2, -1, 1])).toBe(1);
  });
  test('Example 2', () => {
    expect(findClosestNumber([-10000, -10000])).toBe(-10000);
  });
});
