import { findContentChildren } from './0455';

describe('LeetCode 0455', () => {
  test('Example 1', () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1);
  });
  test('Example 2', () => {
    expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2);
  });
});
