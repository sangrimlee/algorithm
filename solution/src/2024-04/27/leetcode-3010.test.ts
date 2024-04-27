import { minimumCost } from './leetcode-3010';

describe('2024-04-27: LeetCode 3010', () => {
  test('Example 1', () => {
    expect(minimumCost([1, 2, 3, 12])).toBe(6);
  });
  test('Example 2', () => {
    expect(minimumCost([5, 4, 3])).toBe(12);
  });
  test('Example 3', () => {
    expect(minimumCost([10, 3, 1, 1])).toBe(12);
  });
});
