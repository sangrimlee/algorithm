import { longestPalindrome } from './0005';

describe('LeetCode 0005', () => {
  test('Example 1', () => {
    expect(['bab', 'aba']).toContain(longestPalindrome('babad'));
  });

  test('Example 2', () => {
    expect(['bb']).toContain(longestPalindrome('cbbd'));
  });
});
