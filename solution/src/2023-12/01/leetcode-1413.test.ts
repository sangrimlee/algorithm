import { minStartValue } from './leetcode-1413';

describe('2023-12-01: LeetCode 1413', () => {
  test('Example 1', () => {
    expect(minStartValue([-3, 2, -3, 4, 2])).toBe(5);
  });
  test('Example 2', () => {
    expect(minStartValue([1, 2])).toBe(1);
  });
  test('Example 3', () => {
    expect(minStartValue([1, -2, -3])).toBe(5);
  });
});
