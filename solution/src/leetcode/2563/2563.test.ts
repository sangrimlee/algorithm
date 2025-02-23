import { countFairPairs } from './2563';

describe('LeetCode 2563', () => {
  test('Example 1', () => {
    expect(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)).toBe(6);
  });
  test('Example 2', () => {
    expect(countFairPairs([1, 7, 9, 2, 5], 11, 11)).toBe(1);
  });
});
