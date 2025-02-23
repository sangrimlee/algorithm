import { findMaxLength } from './0525';

describe('LeetCode 0525', () => {
  test('Example 1', () => {
    expect(findMaxLength([0, 1])).toBe(2);
  });
  test('Example 2', () => {
    expect(findMaxLength([0, 1, 0])).toBe(2);
  });
});
