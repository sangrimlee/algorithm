import { canBeIncreasing } from './leetcode-1909';

describe('2024-01-10: LeetCode 1909', () => {
  test('Example 1', () => {
    expect(canBeIncreasing([1, 2, 10, 5, 7])).toBe(true);
  });
  test('Example 2', () => {
    expect(canBeIncreasing([2, 3, 1, 2])).toBe(false);
  });
  test('Example 3', () => {
    expect(canBeIncreasing([1, 1, 1])).toBe(false);
  });
});
