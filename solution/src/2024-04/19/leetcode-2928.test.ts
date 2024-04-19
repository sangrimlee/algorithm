import { distributeCandies } from './leetcode-2928';

describe('2024-04-19: LeetCode 2928', () => {
  test('Example 1', () => {
    expect(distributeCandies(5, 2)).toBe(3);
  });
  test('Example 2', () => {
    expect(distributeCandies(3, 3)).toBe(10);
  });
});
