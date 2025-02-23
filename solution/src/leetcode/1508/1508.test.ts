import { rangeSum } from './1508';

describe('LeetCode 1508', () => {
  test('Example 1', () => {
    expect(rangeSum([1, 2, 3, 4], 4, 1, 5)).toBe(13);
  });
  test('Example 2', () => {
    expect(rangeSum([1, 2, 3, 4], 4, 3, 4)).toBe(6);
  });
  test('Example 3', () => {
    expect(rangeSum([1, 2, 3, 4], 4, 1, 10)).toBe(50);
  });
});
