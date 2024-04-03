import { findNonMinOrMax } from './leetcode-2733';

describe('2024-04-03: LeetCode 2733', () => {
  test('Example 1', () => {
    expect(findNonMinOrMax([3, 2, 1, 4])).toBe(3);
  });
  test('Example 2', () => {
    expect(findNonMinOrMax([1, 2])).toBe(-1);
  });
  test('Example 3', () => {
    expect(findNonMinOrMax([2, 1, 3])).toBe(2);
  });
});
