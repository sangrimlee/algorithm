import { numberOfChild } from './leetcode-3178';

describe('2024-06-11: LeetCode 3178', () => {
  test('Example 1', () => {
    expect(numberOfChild(3, 5)).toBe(1);
  });

  test('Example 2', () => {
    expect(numberOfChild(5, 6)).toBe(2);
  });

  test('Example 3', () => {
    expect(numberOfChild(4, 2)).toBe(2);
  });
});
