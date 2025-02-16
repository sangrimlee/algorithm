import { maximumDifference } from './leetcode-2016';

describe('2024-01-22: LeetCode 2016', () => {
  test('Example 1', () => {
    expect(maximumDifference([7, 1, 5, 4])).toBe(4);
  });
  test('Example 2', () => {
    expect(maximumDifference([9, 4, 3, 2])).toBe(-1);
  });
  test('Example 3', () => {
    expect(maximumDifference([1, 5, 2, 10])).toBe(9);
  });
});
