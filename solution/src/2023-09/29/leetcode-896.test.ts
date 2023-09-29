import { isMonotonic } from './leetcode-896';

describe('2023-09-29: LeetCode 896', () => {
  test('Example 1', () => {
    expect(isMonotonic([1, 2, 2, 3])).toBe(true);
  });
  test('Example 2', () => {
    expect(isMonotonic([6, 5, 4, 4])).toBe(true);
  });
  test('Example 3', () => {
    expect(isMonotonic([1, 3, 2])).toBe(false);
  });
  test('Example 4', () => {
    expect(isMonotonic([1, 2, 2, 1, 0, -1])).toBe(false);
  });
  test('Example 5', () => {
    expect(isMonotonic([3, 4, 2, 3])).toBe(false);
  });
});
