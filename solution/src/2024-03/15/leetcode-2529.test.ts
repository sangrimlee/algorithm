import { maximumCount } from './leetcode-2529';

describe('2024-03-15: LeetCode 2529', () => {
  test('Example 1', () => {
    expect(maximumCount([-2, -1, -1, 1, 2, 3])).toBe(3);
  });
  test('Example 2', () => {
    expect(maximumCount([-3, -2, -1, 0, 0, 1, 2])).toBe(3);
  });
  test('Example 3', () => {
    expect(maximumCount([5, 20, 66, 1314])).toBe(4);
  });
});
