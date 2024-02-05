import { countElements } from './leetcode-2148';

describe('2024-02-05: LeetCode 2148', () => {
  test('Example 1', () => {
    expect(countElements([11, 7, 2, 15])).toBe(2);
  });
  test('Example 2', () => {
    expect(countElements([-3, 3, 3, 90])).toBe(2);
  });

  test('Example 2', () => {
    expect(countElements([])).toBe(0);
  });
});
