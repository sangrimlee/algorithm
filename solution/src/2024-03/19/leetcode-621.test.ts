import { leastInterval } from './leetcode-621';

describe('2024-03-19: LeetCode 621', () => {
  test('Example 1', () => {
    expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8);
  });
  test('Example 2', () => {
    expect(leastInterval(['A', 'C', 'A', 'B', 'D', 'B'], 1)).toBe(6);
  });
  test('Example 3', () => {
    expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3)).toBe(10);
  });
});
