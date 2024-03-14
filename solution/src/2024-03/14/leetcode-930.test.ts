import { numSubarraysWithSum } from './leetcode-930';

describe('2024-03-14: LeetCode 930', () => {
  test('Example 1', () => {
    expect(numSubarraysWithSum([1, 0, 1, 0, 1], 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(numSubarraysWithSum([0, 0, 0, 0, 0], 0)).toBe(15);
  });
});
