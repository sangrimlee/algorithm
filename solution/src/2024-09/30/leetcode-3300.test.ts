import { minElement } from './leetcode-3300';

describe('2024-09-30: LeetCode 3300', () => {
  test('Example 1', () => {
    expect(minElement([10, 12, 13, 14])).toBe(1);
  });
  test('Example 2', () => {
    expect(minElement([1, 2, 3, 4])).toBe(1);
  });
  test('Example 3', () => {
    expect(minElement([999, 19, 199])).toBe(10);
  });
});
