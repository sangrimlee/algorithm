import { minIncrementForUnique } from './leetcode-945';

describe('2024-06-14: LeetCode 945', () => {
  test('Example 1', () => {
    expect(minIncrementForUnique([1, 2, 2])).toBe(1);
  });
  test('Example 2', () => {
    expect(minIncrementForUnique([3, 2, 1, 2, 1, 7])).toBe(6);
  });
});
