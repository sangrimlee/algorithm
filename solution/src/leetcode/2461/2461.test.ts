import { maximumSubarraySum } from './2461';

describe('LeetCode 2461', () => {
  test('Example 1', () => {
    expect(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)).toBe(15);
  });
  test('Example 2', () => {
    expect(maximumSubarraySum([4, 4, 4], 3)).toBe(0);
  });
});
