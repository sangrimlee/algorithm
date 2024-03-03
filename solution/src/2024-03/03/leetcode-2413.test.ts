import { smallestEvenMultiple } from './leetcode-2413';

describe('2024-03-03: LeetCode 2413', () => {
  test('Example 1', () => {
    expect(smallestEvenMultiple(5)).toBe(10);
  });
  test('Example 2', () => {
    expect(smallestEvenMultiple(6)).toBe(6);
  });
});
