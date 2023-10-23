import { isPowerOfFour } from './leetcode-342';

describe('2023-10-23: LeetCode 342', () => {
  test('Example 1', () => {
    expect(isPowerOfFour(16)).toBe(true);
  });
  test('Example 2', () => {
    expect(isPowerOfFour(5)).toBe(false);
  });
  test('Example 3', () => {
    expect(isPowerOfFour(1)).toBe(true);
  });
});
