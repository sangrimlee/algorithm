import { findMaximizedCapital } from './0502';

describe('LeetCode 0502', () => {
  test('Example 1', () => {
    expect(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1])).toBe(4);
  });
  test('Example 2', () => {
    expect(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2])).toBe(6);
  });
});
