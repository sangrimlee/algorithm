import { countPrimes } from './0204';

describe('LeetCode 0204', () => {
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
