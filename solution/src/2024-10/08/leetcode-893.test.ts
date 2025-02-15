import { numSpecialEquivGroups } from './leetcode-893';

describe('2024-10-08: LeetCode 893', () => {
  test('Example 1', () => {
    expect(numSpecialEquivGroups(['abcd', 'cdab', 'cbad', 'xyzz', 'zzxy', 'zzyx'])).toBe(3);
  });
  test('Example 2', () => {
    expect(numSpecialEquivGroups(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])).toBe(3);
  });
});
