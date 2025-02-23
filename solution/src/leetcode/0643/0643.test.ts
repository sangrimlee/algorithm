import { findMaxAverage } from './0643';

describe('LeetCode 0643', () => {
  test('Example 1', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });
  test('Example 2', () => {
    expect(findMaxAverage([5], 1)).toBe(5.0);
  });
});
