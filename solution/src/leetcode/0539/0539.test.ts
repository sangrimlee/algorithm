import { findMinDifference } from './0539';

describe('LeetCode 0539', () => {
  test('Example 1', () => {
    expect(findMinDifference(['23:59', '00:00'])).toBe(1);
  });
  test('Example 2', () => {
    expect(findMinDifference(['00:00', '23:59', '00:00'])).toBe(0);
  });
});
