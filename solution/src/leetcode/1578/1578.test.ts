import { minCost } from './1578';

describe('LeetCode 1578', () => {
  test('Example 1', () => {
    expect(minCost('abaac', [1, 2, 3, 4, 5])).toBe(3);
  });

  test('Example 2', () => {
    expect(minCost('abc', [1, 2, 3])).toBe(0);
  });

  test('Example 3', () => {
    expect(minCost('aabaa', [1, 2, 3, 4, 1])).toBe(2);
  });

  test('Example 4', () => {
    expect(minCost('aabaaa', [1, 2, 3, 4, 1, 2])).toBe(4);
  });
});
