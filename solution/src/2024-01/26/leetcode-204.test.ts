import { countPrimes } from './leetcode-204';

describe('2024-01-26: LeetCode 204', () => {
  test('Example 1', () => {
    expect(countPrimes(10)).toBe(4);
  });
  test('Example 2', () => {
    expect(countPrimes(0)).toBe(0);
  });
  test('Example 3', () => {
    expect(countPrimes(1)).toBe(0);
  });
});
