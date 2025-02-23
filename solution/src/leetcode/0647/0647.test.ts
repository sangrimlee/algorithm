import { countSubstrings } from './0647';

describe('LeetCode 0647', () => {
  test('Example 1', () => {
    expect(countSubstrings('abc')).toBe(3);
  });
  test('Example 2', () => {
    expect(countSubstrings('aaa')).toBe(6);
  });
});
