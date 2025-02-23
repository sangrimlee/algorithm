import { longestCommonPrefix } from './3043';

describe('LeetCode 3043', () => {
  test('Example 1', () => {
    expect(longestCommonPrefix([1, 10, 100], [1000])).toBe(3);
  });
  test('Example 2', () => {
    expect(longestCommonPrefix([1, 2, 3], [4, 4, 4])).toBe(0);
  });
});
