import { numRescueBoats } from './leetcode-881';

describe('2024-05-04: LeetCode 881', () => {
  test('Example 1', () => {
    expect(numRescueBoats([1, 2], 3)).toBe(1);
  });
  test('Example 2', () => {
    expect(numRescueBoats([3, 2, 2, 1], 3)).toBe(3);
  });
  test('Example 3', () => {
    expect(numRescueBoats([3, 5, 3, 4], 5)).toBe(4);
  });
});
