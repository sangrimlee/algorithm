import { constrainedSubsetSum } from './leetcode-1425';

describe('2023-10-21: LeetCode 1425', () => {
  test('Example 1', () => {
    expect(constrainedSubsetSum([10, 2, -10, 5, 20], 2)).toBe(37);
  });
  test('Example 2', () => {
    expect(constrainedSubsetSum([-1, -2, -3], 1)).toBe(-1);
  });
  test('Example 3', () => {
    expect(constrainedSubsetSum([10, -2, -10, -5, 20], 2)).toBe(23);
  });
});
