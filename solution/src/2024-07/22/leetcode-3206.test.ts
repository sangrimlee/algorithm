import { numberOfAlternatingGroups } from './leetcode-3206';

describe('2024-07-22: LeetCode 3206', () => {
  test('Example 1', () => {
    expect(numberOfAlternatingGroups([1, 1, 1])).toBe(0);
  });
  test('Example 2', () => {
    expect(numberOfAlternatingGroups([0, 1, 0, 0, 1])).toBe(3);
  });
});
