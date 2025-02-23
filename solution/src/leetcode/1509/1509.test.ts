import { minDifference } from './1509';

describe('LeetCode 1509', () => {
  test('Example 1', () => {
    expect(minDifference([5, 3, 2, 4])).toBe(0);
  });
  test('Example 2', () => {
    expect(minDifference([1, 5, 0, 10, 14])).toBe(1);
  });
  test('Example 3', () => {
    expect(minDifference([3, 100, 20])).toBe(0);
  });
});
