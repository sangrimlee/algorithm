import { removePalindromeSub } from './leetcode-1332';

describe('2022-06-08: LeetCode 1332', () => {
  test('Example 1', () => {
    expect(removePalindromeSub('ababa')).toBe(1);
  });

  test('Example 2', () => {
    expect(removePalindromeSub('abb')).toBe(2);
  });

  test('Example 3', () => {
    expect(removePalindromeSub('baabb')).toBe(2);
  });
});
