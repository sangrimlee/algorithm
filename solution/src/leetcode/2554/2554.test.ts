import { maxCount } from './2554';

describe('LeetCode 2554', () => {
  test('Example 1', () => {
    expect(maxCount([1, 6, 5], 5, 6)).toBe(2);
  });
  test('Example 2', () => {
    expect(maxCount([1, 2, 3, 4, 5, 6, 7], 8, 1)).toBe(0);
  });
  test('Example 3', () => {
    expect(maxCount([11], 7, 50)).toBe(7);
  });
});
