import { smallestRangeI } from './0908';

describe('LeetCode 0908', () => {
  test('Example 1', () => {
    expect(smallestRangeI([1], 0)).toBe(0);
  });
  test('Example 2', () => {
    expect(smallestRangeI([0, 10], 2)).toBe(6);
  });
  test('Example 3', () => {
    expect(smallestRangeI([1, 3, 6], 3)).toBe(0);
  });
});
