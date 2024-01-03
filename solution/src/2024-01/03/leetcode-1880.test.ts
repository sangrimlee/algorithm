import { isSumEqual } from './leetcode-1880';

describe('2024-01-03: LeetCode 1880', () => {
  test('Example 1', () => {
    expect(isSumEqual('acb', 'cba', 'cdb')).toBe(true);
  });
  test('Example 2', () => {
    expect(isSumEqual('aaa', 'a', 'aab')).toBe(false);
  });
  test('Example 3', () => {
    expect(isSumEqual('aaa', 'a', 'aaaa')).toBe(true);
  });
});
