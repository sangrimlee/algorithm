import { countOdds } from './leetcode-1523';

describe('2023-12-07: LeetCode 1523', () => {
  test('Example 1', () => {
    expect(countOdds(3, 7)).toBe(3);
  });
  test('Example 2', () => {
    expect(countOdds(8, 10)).toBe(1);
  });
});
