import { eliminateMaximum } from './leetcode-1921';

describe('2023-11-07: LeetCode 1921', () => {
  test('Example 1', () => {
    expect(eliminateMaximum([1, 3, 4], [1, 1, 1])).toBe(3);
  });
  test('Example 2', () => {
    expect(eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1])).toBe(1);
  });
  test('Example 3', () => {
    expect(eliminateMaximum([3, 2, 4], [5, 3, 2])).toBe(1);
  });
  test('Example 4', () => {
    expect(eliminateMaximum([4, 2, 3], [2, 1, 1])).toBe(3);
  });
});
