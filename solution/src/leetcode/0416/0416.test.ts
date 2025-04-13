import { canPartition } from './0416';

describe('LeetCode 0416', () => {
  test('Example 1', () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);
  });
  test('Example 2', () => {
    expect(canPartition([1, 2, 3, 5])).toBe(false);
  });
});
