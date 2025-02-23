import { numSpecialEquivGroups } from './0893';

describe('LeetCode 0893', () => {
  test('Example 1', () => {
    expect(numSpecialEquivGroups(['abcd', 'cdab', 'cbad', 'xyzz', 'zzxy', 'zzyx'])).toBe(3);
  });
  test('Example 2', () => {
    expect(numSpecialEquivGroups(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])).toBe(3);
  });
});
