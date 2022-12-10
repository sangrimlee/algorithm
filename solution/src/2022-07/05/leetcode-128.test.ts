import { longestConsecutive } from './leetcode-128';

describe('2022-07-05: LeetCode 128', () => {
  test('Example 1', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  test('Example 2', () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });
});
