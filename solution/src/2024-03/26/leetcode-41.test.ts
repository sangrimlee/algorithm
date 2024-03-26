import { firstMissingPositive } from './leetcode-41';

describe('2024-03-26: LeetCode 41', () => {
  test('Example 1', () => {
    expect(firstMissingPositive([1, 2, 0])).toBe(3);
  });
  test('Example 2', () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
  });
  test('Example 3', () => {
    expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
  });
});
