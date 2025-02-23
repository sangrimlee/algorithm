import { maxProductDifference } from './1913';

describe('LeetCode 1913', () => {
  test('Example 1', () => {
    expect(maxProductDifference([5, 6, 2, 7, 4])).toBe(34);
  });
  test('Example 2', () => {
    expect(maxProductDifference([4, 2, 5, 9, 7, 4, 8])).toBe(64);
  });
});
