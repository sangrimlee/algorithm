import { findPoisonedDuration } from './leetcode-495';

describe('2023-05-04: LeetCode 495', () => {
  test('Example 1', () => {
    expect(findPoisonedDuration([1, 4], 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(findPoisonedDuration([1, 2], 2)).toBe(3);
  });
});
