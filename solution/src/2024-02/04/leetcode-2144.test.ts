import { minimumCost } from './leetcode-2144';

describe('2024-02-04: LeetCode 2144', () => {
  test('Example 1', () => {
    expect(minimumCost([1, 2, 3])).toBe(5);
  });
  test('Example 2', () => {
    expect(minimumCost([6, 5, 7, 9, 2, 2])).toBe(23);
  });
  test('Example 3', () => {
    expect(minimumCost([5, 5])).toBe(10);
  });
});
