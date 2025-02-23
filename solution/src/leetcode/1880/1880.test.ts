import { isSumEqual } from './1880';

describe('LeetCode 1880', () => {
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
