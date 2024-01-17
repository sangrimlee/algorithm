import { isPrefixString } from './leetcode-1961';

describe('2024-01-17: LeetCode 1961', () => {
  test('Example 1', () => {
    expect(isPrefixString('iloveleetcode', ['i', 'love', 'leetcode', 'apples'])).toBe(true);
  });
  test('Example 2', () => {
    expect(isPrefixString('iloveleetcode', ['apples', 'i', 'love', 'leetcode'])).toBe(false);
  });
  test('Example 3', () => {
    expect(isPrefixString('a', ['aa', 'aaaa', 'banana'])).toBe(false);
  });
});
