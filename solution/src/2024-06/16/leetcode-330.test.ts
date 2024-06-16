import { minPatches } from './leetcode-330';

describe('2024-06-16: LeetCode 330', () => {
  test('Example 1', () => {
    expect(minPatches([1, 3], 6)).toBe(1);
  });
  test('Example 2', () => {
    expect(minPatches([1, 5, 10], 20)).toBe(2);
  });
  test('Example 3', () => {
    expect(minPatches([1, 2, 2], 5)).toBe(0);
  });
});
