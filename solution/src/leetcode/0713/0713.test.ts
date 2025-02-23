import { numSubarrayProductLessThanK } from './0713';

describe('LeetCode 0713', () => {
  test('Example 1', () => {
    expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100)).toBe(8);
  });
  test('Example 2', () => {
    expect(numSubarrayProductLessThanK([1, 2, 3], 0)).toBe(0);
  });
});
