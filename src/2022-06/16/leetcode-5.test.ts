import { longestPalindrome } from './leetcode-5';

describe('2022-06-16: LeetCode 5', () => {
  test('Example 1', () => {
    expect(['bab', 'aba']).toContain(longestPalindrome('babad'));
  });

  test('Example 2', () => {
    expect(['bb']).toContain(longestPalindrome('cbbd'));
  });
});
