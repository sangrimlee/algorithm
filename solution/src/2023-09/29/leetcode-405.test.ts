import { toHex } from './leetcode-405';

describe('2023-09-29: LeetCode 405', () => {
  test('Example 1', () => {
    expect(toHex(26)).toBe('1a');
  });
  test('Example 2', () => {
    expect(toHex(-1)).toBe('ffffffff');
  });
});
