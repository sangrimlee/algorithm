import { distanceTraveled } from './leetcode-2739';

describe('2024-04-04: LeetCode 2739', () => {
  test('Example 1', () => {
    expect(distanceTraveled(5, 10)).toBe(60);
  });
  test('Example 2', () => {
    expect(distanceTraveled(1, 2)).toBe(10);
  });
});
