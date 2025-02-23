import { countAndSay } from './0038';

describe('LeetCode 0038', () => {
  test('Example 1', () => {
    expect(countAndSay(1)).toBe('1');
  });
  test('Example 2', () => {
    expect(countAndSay(4)).toBe('1211');
  });
  test('Example 3', () => {
    expect(countAndSay(5)).toBe('111221');
  });
});
