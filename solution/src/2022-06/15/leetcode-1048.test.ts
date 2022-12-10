import { longestStrChain } from './leetcode-1048';

describe('2022-06-15: LeetCode 1048', () => {
  test('Example 1', () => {
    expect(longestStrChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca'])).toBe(4);
  });

  test('Example 2', () => {
    expect(longestStrChain(['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'])).toBe(5);
  });

  test('Example 3', () => {
    expect(longestStrChain(['abcd', 'dbqca'])).toBe(1);
  });
});
