import { countKDifference } from './2006';

describe('LeetCode 2006', () => {
  test('Example 1', () => {
    expect(countKDifference([1, 2, 2, 1], 1)).toBe(4);
  });
  test('Example 2', () => {
    expect(countKDifference([1, 3], 3)).toBe(0);
  });
  test('Example 3', () => {
    expect(countKDifference([3, 2, 1, 5, 4], 2)).toBe(3);
  });
});
