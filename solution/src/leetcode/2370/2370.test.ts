import { longestIdealString } from './2370';

describe('LeetCode 2370', () => {
  test('Example 1', () => {
    expect(longestIdealString('acfgbd', 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(longestIdealString('abcd', 3)).toBe(4);
  });
});
