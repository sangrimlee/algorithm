import { findPaths } from './0576';

describe('LeetCode 0576', () => {
  test('Example 1', () => {
    expect(findPaths(2, 2, 2, 0, 0)).toBe(6);
  });
  test('Example 2', () => {
    expect(findPaths(1, 3, 3, 0, 1)).toBe(12);
  });
});
