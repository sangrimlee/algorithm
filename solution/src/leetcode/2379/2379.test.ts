import { minimumRecolors } from './2379';

describe('LeetCode 2379', () => {
  test('Example 1', () => {
    expect(minimumRecolors('WBBWWBBWBW', 7)).toBe(3);
  });
  test('Example 2', () => {
    expect(minimumRecolors('WBWBBBW', 2)).toBe(0);
  });
});
