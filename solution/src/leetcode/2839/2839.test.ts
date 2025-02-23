import { canBeEqual } from './2839';

describe('LeetCode 2839', () => {
  test('Example 1', () => {
    expect(canBeEqual('abcd', 'cdab')).toBe(true);
  });
  test('Example 2', () => {
    expect(canBeEqual('abcd', 'dacb')).toBe(false);
  });
});
