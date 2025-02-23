import { minimumMountainRemovals } from './1671';

describe('LeetCode 1671', () => {
  test('Example 1', () => {
    expect(minimumMountainRemovals([1, 3, 1])).toBe(0);
  });
  test('Example 2', () => {
    expect(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1])).toBe(3);
  });
});
