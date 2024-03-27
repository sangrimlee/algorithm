import { numSubarrayProductLessThanK } from './leetcode-713';

describe('2024-03-27: LeetCode 713', () => {
  test('Example 1', () => {
    expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100)).toBe(8);
  });
  test('Example 2', () => {
    expect(numSubarrayProductLessThanK([1, 2, 3], 0)).toBe(0);
  });
});
