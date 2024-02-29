import { minimumRecolors } from './leetcode-2379';

describe('2024-02-29: LeetCode 2379', () => {
  test('Example 1', () => {
    expect(minimumRecolors('WBBWWBBWBW', 7)).toBe(3);
  });
  test('Example 2', () => {
    expect(minimumRecolors('WBWBBBW', 2)).toBe(0);
  });
});
