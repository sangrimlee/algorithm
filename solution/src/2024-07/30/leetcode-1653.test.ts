import { minimumDeletions } from './leetcode-1653';

describe('2024-07-29: LeetCode 1395', () => {
  test('Example 1', () => {
    expect(minimumDeletions('aababbab')).toBe(2);
  });
  test('Example 2', () => {
    expect(minimumDeletions('bbaaaaabb')).toBe(2);
  });
});
