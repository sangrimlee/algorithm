import { minDeletions } from './leetcode-1647';

describe('2022-06-28: LeetCode 1647', () => {
  test('Example 1', () => {
    expect(minDeletions('aab')).toBe(0);
  });

  test('Example 2', () => {
    expect(minDeletions('aaabbbcc')).toBe(2);
  });

  test('Example 3', () => {
    expect(minDeletions('ceabaacb')).toBe(2);
  });
});
