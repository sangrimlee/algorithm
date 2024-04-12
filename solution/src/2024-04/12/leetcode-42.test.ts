import { trap } from './leetcode-42';

describe('2024-04-12: LeetCode 42', () => {
  test('Example 1', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });
  test('Example 2', () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });
});
