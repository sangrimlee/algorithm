import { largestPerimeter } from './2971';

describe('LeetCode 2971', () => {
  test('Example 1', () => {
    expect(largestPerimeter([5, 5, 5])).toBe(15);
  });
  test('Example 2', () => {
    expect(largestPerimeter([1, 12, 1, 2, 5, 50, 3])).toBe(12);
  });
  test('Example 3', () => {
    expect(largestPerimeter([5, 5, 50])).toBe(-1);
  });
});
